# RE:Cycle

### Members
Mitali Shenoy, Arielle Posadas, Kelly Shen

### About

RE:Cycle is a machine learning app that categorizes images by recyclability to help users be more sustainable with their waste!

According to the Environmental Protection Agency, 292.4 million tons of Municipal Solid Waste (in other words, trash) was produced in the United States in 2018. Of those 292.4 million tons, 94 million were recycled and composted: a recycling rate of 32.1 percent. While nothing to scoff at, that still means a whopping 200 million tons of plastic end up landfills or as litter every year. With a growing garbage patch of plastic in the Pacific and carbon emissions that are projected to overshoot our allowed "tipping point" for global warming, we know something needs to change.

Reduce, reuse, recycle. The first two are more effective than recycling, but we recognize that some things are neither; that's what our app is for! Using machine learning, we've created a model to categorize things as either recyclable or non-recyclable to help us in our quest for a more sustainable world.


### How it works

This app was created with React, Tensorflow/Tensorflowjs, and Firebase hosting! We trained a Tensorflow model with an image library from Kaggle and exported it to a Tensorflow js compatible format, then we loaded it directly into the frontend to make predictions on images that you can either upload or take using a webcam. Currently, the accuracy of the model has room for improvement--we're working on getting it better.


### Try it out
https://reecycle-13702.web.app/


![Homepage](https://github.com/shenkel7/recycle/blob/6933e557329cdaf12c03f654da9105b2b3188dcd/homepage.png)
