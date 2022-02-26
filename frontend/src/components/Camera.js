import React, { useState } from 'react';
import Webcam from "react-webcam";

// const WebcamComponent = () => <Camera />;

const videoConstraints = {
    width: 960,
    height: 540,
    facingMode: "user"
};

const button_style = {
    backgroundColor: "#5F6F3A",
    left: '550px',
    position: 'absolute',
    borderRadius: 15,
    padding: "12px 49px",
    fontSize: "22px"
}

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
    flex: "50%",
    padding: "5px"
}

export const Camera = () => {

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
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
                        <button onClick={(e) => {
                            e.preventDefault();
                            setImage('')
                        }} 
                        style={button_style}>
                            Retake </button>
                            :
                        <button onClick={(e) => {
                            e.preventDefault();
                            capture();
                        }}
                        style={button_style}>Capture</button>
                    }
                </div>
                <div style={column}>
                    <button style={button_style2}>Next</button>
                    {/* to do: disable button at first, but when user captures image, button can be clicked */}
                </div>
            </div>
        </div>
    );
};
