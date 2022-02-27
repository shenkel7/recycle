import React, {useEffect, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import "@tensorflow/tfjs";
import Home from './screens/Home';
import About from './screens/About';
import Webcam from './screens/WebcamPage';
import {loadGraphModel} from '@tensorflow/tfjs-converter';
import { useDispatch } from 'react-redux';
import PizzaSlice from './store/PizzaSlice';
import ImageUpload from './screens/ImageUpload';
import Results from './screens/Results';

// TODO change this
const MODEL_URL = 'https://reecycles.herokuapp.com/';

function App() {
  const dispatch = useDispatch();
  
  const loadModel = async () => {
    const model = await loadGraphModel(MODEL_URL);
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
