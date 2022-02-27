import React, { useState } from 'react';
import Webcam from "react-webcam";
import { Button, Card } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import PizzaSlice from '../store/PizzaSlice';

// const WebcamComponent = () => <Camera />;

const videoConstraints = {
    width: 960,
    height: 540,
    facingMode: "user"
};

const disabledButton = {
    backgroundColor: "#5F6F3A",
    borderRadius: 15,
    padding: "9px 36px",
    fontSize: "18px",
    marginTop: 10,
    color: 'white',
    opacity: .5
  }

const third = {
    backgroundColor: "#5F6F3A",
    borderRadius: 15,
    padding: "9px 36px",
    fontSize: "18px",
    marginTop: 10,
    color: 'white',
  }

// const button_style = {
//     backgroundColor: "#5F6F3A",
//     left: '550px',
//     position: 'absolute',
//     borderRadius: 15,
//     padding: "12px 49px",
//     fontSize: "22px"
// }

const button_style2 = {
    backgroundColor: "#5F6F3A",
    right: '550px',
    position: 'absolute',
    borderRadius: 15,
    padding: "12px 49px",
    fontSize: "22px"
}

const layout = {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '4em',
}

const row = {
    display: 'flex'
}

const column = {
    paddingTop: '2em',
    flex: 1,
    padding: "5px"
}

export const Camera = () => {

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);
  let navigate = useNavigate();
  const dispatch = useDispatch();

    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
            dispatch(PizzaSlice.actions.setImage(imageSrc))
        });

    return (
        <div>
            <div style={layout}>
                {image == '' ? <Webcam
                    audio={false}
                    height={540}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={960}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
            </div>

            <div style={row}>
                <div style={column}>
                    {image != '' ?
                        <Button onClick={(e) => {
                            e.preventDefault();
                            setImage('')
                        }} 
                        style={third}>
                            Retake </Button>
                            :
                        <Button onClick={(e) => {
                            e.preventDefault();
                            capture();
                        }}
                        style={third}>Capture</Button>
                    }
                </div>
                <div style={column}>
                    <Button variant="contained" 
                    disabled={image.length === 0}
                    onClick={() => {
                        navigate("/results");
                    }} style={image.length === 0 ? disabledButton : third}>Next</Button>
                </div>
            </div>
        </div>
    );
};
