# %%
from tkinter import Image
import numpy as np
import pandas as pd

import warnings
warnings.filterwarnings('ignore')
import os
import tensorflow
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import keras
import tqdm
import glob
from imshow import imshow
from tqdm import tqdm

from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.applications.vgg16 import VGG16
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import InputLayer, Dense, Flatten, BatchNormalization, Dropout, Activation
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint
from tensorflow.keras.preprocessing.image import load_img, img_to_array

from tensorflow.compat.v1 import ConfigProto
from tensorflow.compat.v1 import InteractiveSession


saved_model_path = "../model/saved_models/best_weights.hdf5"

from keras.models import load_model
test_model = load_model(saved_model_path)

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

model.load_weights(saved_model_path)

optimizers = tensorflow.keras.optimizers.Adam(lr=0.001)
model.compile(loss='binary_crossentropy', metrics = [tensorflow.keras.metrics.AUC(name = 'auc')],
optimizer = optimizers)

# %%

test_datagen  = ImageDataGenerator(rescale = 1.0 / 255.0)

test_data = test_datagen.flow_from_directory(directory = '../model/dataset/TEST/',
                                             target_size = (224,224),
                                             class_mode = 'binary',
                                             batch_size = 128)

# Evaluating Loss and AUC - Test Data 

model.evaluate(test_data)



# %%

# Test Case:1 - NON Recyclable

dic = test_data.class_indices
idc = {k:v for v,k in dic.items()}

img = load_img('../model/dataset/TEST/O/O_12628.jpg', target_size=(224,224))
img = img_to_array(img)
img = img / 255
# imshow(img)
plt.axis('off')
img = np.expand_dims(img,axis=0)
answer = model.predict(img)

if answer[0][0] > 0.5:
    print("The image belongs to Recycle waste category")
else:
    print("The image belongs to Cannot Recycle waste category ")


# Test Case:2 - RECYCLE

dic = test_data.class_indices
idc = {k:v for v,k in dic.items()}

img = load_img('../model/dataset/TEST/R/R_10762.jpg', target_size=(224,224))
img = img_to_array(img)
img = img / 255
# imshow(img)
plt.axis('off')
img = np.expand_dims(img,axis=0)
answer = model.predict(img)

if answer[0][0] > 0.5:
    print("The image belongs to Recycle waste category")
else:
    print("The image belongs to Organic waste category ")



# %%

model.save('../model/saved_models/trained_model_v1.h5')


 # %%
import tensorflowjs as tfjs
tfjs.converters.save_keras_model(model, '../model/saved_models/')
# %%
