# %%

from tkinter import Image
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import warnings
warnings.filterwarnings('ignore')
import os
import tensorflow
import tqdm
import glob
import imshow
from tqdm import tqdm

from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.applications.vgg16 import VGG16
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import InputLayer, Dense, Flatten, BatchNormalization, Dropout, Activation
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint
from tensorflow.keras.preprocessing.image import load_img, img_to_array

from tensorflow.compat.v1 import ConfigProto
from tensorflow.compat.v1 import InteractiveSession


gpus = tensorflow.config.experimental.list_physical_devices('GPU')
tensorflow.config.experimental.set_memory_growth(gpus[0], True)

# %%


# getting image data from system



train_data_path = "../model/dataset/TRAIN/"
test_data_path = "../model/dataset/TEST/"

train_non_recycle_images = glob.glob(train_data_path+"O/*.jpg")
train_non_recycle_len = len(train_non_recycle_images)
print(train_non_recycle_len)

train_recycle_images = glob.glob(train_data_path+"R/*.jpg")
train_recycle_len = len(train_recycle_images)
print(train_recycle_len)

test_non_recycle_images = glob.glob(test_data_path+"O/*.jpg")
test_non_recycle_len = len(test_non_recycle_images)
print(test_non_recycle_len)

test_recycle_images = glob.glob(test_data_path+"R/*.jpg")
test_recycle_len = len(test_recycle_images)
print(test_recycle_len)

print("Total number of training files: ", train_non_recycle_len+ train_recycle_len)
print("Total number of test files: ", test_non_recycle_len+ test_recycle_len)



# %%

# Data Preprocessing 
# Rescaling images to be standardized dimensions
train_datagen = ImageDataGenerator(rescale = 1.0/255.0, 
                                    zoom_range=0.5,
                                    vertical_flip = True, 
                                    horizontal_flip = True,
                                    rotation_range = 10, 
                                    validation_split = 0.2)

validation_datagen = ImageDataGenerator(rescale = 1.0 / 255.0, 
                                  validation_split = 0.2)

test_datagen  = ImageDataGenerator(rescale = 1.0 / 255.0)

# %%

train_images = train_datagen.flow_from_directory(directory = train_data_path,
                                                 target_size=(224, 224),
                                                 class_mode='binary',
                                                 batch_size = 128,
                                                 subset = 'training')

validation_images = validation_datagen.flow_from_directory(directory = train_data_path,
                                                 target_size=(224, 224),
                                                 class_mode='binary',
                                                 batch_size = 128,
                                                 subset = 'validation')

print(train_images.class_indices)

# %%

## Veiwing sample images to check if imports and rescaling worked correctly 
fig, ax = plt.subplots(nrows = 1, ncols = 5, figsize = (20,20))

for i in tqdm(range(5)):
    rand1 = np.random.randint(len(train_images))
    rand2 = np.random.randint(128)
    ax[i].imshow(train_images[rand1][0][rand2])
    ax[i].axis('off')
    label = train_images[rand1][1][rand2]
    if label == 1:
        ax[i].set_title('Recyclable')
    else:
        ax[i].set_title('Non-Recyclable')

# %%

## Building the tensorflow model 
# Maybe use a Convoluted neural network? 
# transfer learning from tf VGG16 model as the base layer 

model_base = VGG16(input_shape=(224, 224, 3),
                    include_top=False, weights = "imagenet")

for layer in model_base.layers:
    layer.Trainable = False

model_base.summary()
# %%

# Building custom layers onto the model
model = Sequential()
model.add(model_base)
model.add(Dropout(0.2))
model.add(Flatten())
model.add(BatchNormalization())
model.add(Dense(1024, kernel_initializer='he_uniform'))
model.add(BatchNormalization())
model.add(Activation('relu'))
model.add(Dropout(0.2))
model.add(Dense(1024, kernel_initializer='he_uniform'))
model.add(BatchNormalization())
model.add(Activation("relu"))
model.add(Dropout(0.2))
model.add(Dense(1,activation='sigmoid'))

model.summary()


# %%

# Compiling the model 
optimizers = tensorflow.keras.optimizers.Adam(lr=0.001)
model.compile(loss='binary_crossentropy', metrics = [tensorflow.keras.metrics.AUC(name = 'auc')],
optimizer = optimizers)

# defining callback functions 
filepath = './best_weights.hdf5'

earlystopping = EarlyStopping(monitor = 'val_auc', 
                              mode = 'max' , 
                              patience = 5,
                              verbose = 1)

checkpoint    = ModelCheckpoint(filepath, 
                                monitor = 'val_auc', 
                                mode='max', 
                                save_best_only=True, 
                                verbose = 1)


callback_list = [earlystopping, checkpoint]



# %%
model_history=model.fit(train_images,
                        validation_data=validation_images,
                        epochs = 1,
                        callbacks = callback_list,
                        verbose = 1)
# %%
## Saving the trained model

model.save('model\saved_models\trained_model_v1.h5')

# %% 
# visualizing the training accuracy
# Summarize the model loss

plt.plot(model_history.history['loss'])
plt.plot(model_history.history['val_loss'])
plt.title('Model Loss')
plt.ylabel('Loss')
plt.xlabel('Epoch')
plt.legend(['Train', 'Validation'], loc='upper left', bbox_to_anchor=(1,1))
plt.show()

# Summarize models auc

plt.plot(model_history.history['auc'])
plt.plot(model_history.history['val_auc'])
plt.title('Model AUC')
plt.ylabel('AUC')
plt.xlabel('Epoch')
plt.legend(['Train', 'Validation'], loc='upper left', bbox_to_anchor=(1,1))
plt.show()

test_data = test_datagen.flow_from_directory(directory = '../input/waste-classification-data/DATASET/TEST',
                                             target_size = (224,224),
                                             class_mode = 'binary',
                                             batch_size = 128)

# Evaluating Loss and AUC - Test Data 

model.evaluate(test_data)

# Test Case:1 - NON Recyclable

dic = test_data.class_indices
idc = {k:v for v,k in dic.items()}

img = load_img('../input/waste-classification-data/DATASET/TEST/O/O_12650.jpg', target_size=(224,224))
img = img_to_array(img)
img = img / 255
imshow(img)
plt.axis('off')
img = np.expand_dims(img,axis=0)
answer = model.predict_proba(img)

if answer[0][0] > 0.5:
    print("The image belongs to Recycle waste category")
else:
    print("The image belongs to Cannot Recycle waste category ")


# Test Case:2 - RECYCLE

dic = test_data.class_indices
idc = {k:v for v,k in dic.items()}

img = load_img('../input/waste-classification-data/DATASET/TEST/R/R_10011.jpg', target_size=(224,224))
img = img_to_array(img)
img = img / 255
imshow(img)
plt.axis('off')
img = np.expand_dims(img,axis=0)
answer = model.predict_proba(img)

if answer[0][0] > 0.5:
    print("The image belongs to Recycle waste category")
else:
    print("The image belongs to Organic waste category ")


# %%
