import React, {useEffect, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import "@tensorflow/tfjs";
import Home from './screens/Home';
import About from './screens/About';
import Webcam from './screens/WebcamPage';
import { useDispatch } from 'react-redux';
import PizzaSlice from './store/PizzaSlice';
import ImageUpload from './screens/ImageUpload';
import Results from './screens/Results';
import * as tf from '@tensorflow/tfjs';

// TODO change this
// const MODEL_URL = 'https://reecycles.herokuapp.com/';
const MODEL_URL = process.env.PUBLIC_URL + '/model/model.json';


function App() {
  const dispatch = useDispatch();
  
  const loadModel = async () => {
    const tfReady = await tf.ready();
    const model = await tf.loadLayersModel(MODEL_URL);
    //const model = await tf.loadLayersModel(MODEL_URL);

    console.log(model)
    dispatch(PizzaSlice.actions.setModel(model));
  };

  useEffect(() => {
    loadModel();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload" element={<ImageUpload />} />
        <Route path="/webcam" element={<Webcam />} />
        <Route path="/results" element={<Results/>} />
      </Routes>
    </div>
  );
}

export default App;
