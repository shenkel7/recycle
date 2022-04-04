import { Button, Card } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ResponsiveAppBar from '../components/Navbar';
import ImageUploading, {ImageListType} from 'react-images-uploading';
import { Link, useNavigate } from "react-router-dom";
import { maxHeight, minHeight } from '@mui/system';
import PizzaSlice from '../store/PizzaSlice';
import { useDispatch, useSelector } from 'react-redux';
import * as tf from '@tensorflow/tfjs';

const cardStyle = {
  backgroundColor: "#F2DFAF",
  marginTop: '8vh',
  marginRight: '10vw',
  marginLeft: '10vw',
  flex: 1,
  paddingTop: '8vh',
  paddingBottom: 30,
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '60vh',
//   maxHeight: "70vh",
    borderRadius: 20,
}

const third = {
  backgroundColor: "#5F6F3A",
  borderRadius: 15,
  padding: "9px 36px",
  fontSize: "18px",
  margin: 20,
  fontFamily: 'Lato',
}

const imageStyle = {
  // width: 100,
  // height: 95,
  height: '40vh'
  // height: 1000

}

const textTitle = {
    fontFamily: 'Lato',
    fontSize: 30,
    marginTop: 20,
    fontWeight: 100,
  marginRight: '5vw',
  marginLeft: '5vw',
}

const pStyle = {
  // fontFamily: 'Roboto',
  fontSize: 20,
  marginTop: 20,
  fontWeight: 10,
  marginBottom: '5vh',
  marginRight: '5vw',
  marginLeft: '5vw',
}

const Results = () => {
  const maxNumber = 69;
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const index = useSelector(state => state.user.index)
  const model = useSelector(state => state.user.model)

  const image = useSelector(state => state.user.image)
  const imageFile = useSelector(state => state.user.imageFile)
  const [loading, setLoading] = useState(true);
  const [prediction, setPrediction] = useState(0)

  
  const readImage = (file) => {
    return new Promise((rs, rj) => {
      const fileReader = new FileReader();
      fileReader.onload = () => rs(fileReader.result);
      fileReader.onerror = () => rj(fileReader.error);
      fileReader.readAsDataURL(file);
    });
  };

  const predict = async () => {
    // const shape = [1, 4];
    // console.log(b.shape)

    if(model){
      const file = image;
      // const imgData = await readImage(file);
      const imgData = image;

      const imageElement = document.createElement("img");
      imageElement.src = imgData;

      imageElement.onload = async () => {
        const imgSize = {
          width: imageElement.width,
          height: imageElement.height,
        };

        // const imageTensor = tf.tensor(image);
        let imageTensor = tf.browser.fromPixels(imageElement).resizeBilinear([224, 224])
        // imageTensor = tf.image.cropAndResize()
        

        model.predict(tf.expandDims(imageTensor, 0)).data()
          .then((res) => {
            console.log(res[0]);
            setLoading(false);
            setPrediction(res[0])
          })
        };


    }
  }

  useEffect(() => {
    predict();
  }, [model])

  const resultDisplay = () => {
    if(loading){
        return (<div style={textTitle}>
            Loading...
          </div>);
    }
    
    if(prediction === 0) {
      return(
        <>
        <div style={textTitle}>
          This item is NOT recyclable.
        </div>
          <div style={pStyle}>
            Fear not! Some non-recyclable items are also compostable. Before binning it,
            consider if your item can be composted.
        </div>
        </>
      )
    } else {
      return (
        <>
        <div style={textTitle}>
        This item is recyclable!

        </div>
        <div style={pStyle}>
          Toss it in your nearest recycling bin! Plastic, aluminum, and cardboard
          can be recycled into other objects instead of ending up in landfills.
        </div>
        </>
      )
    }
  }


  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Card
            // onMouseEnter={toggleWebcamHover}
            style={cardStyle}
            onClick={() => {
            }}
            >
            <img src={image} alt="" style={imageStyle}/>
            {resultDisplay()}
            {/* <img style={imageStyle} src="/assets/photo_icon.png" alt="photo_icon" />
            <div style={textTitle}>Take a Photo</div> */}
        </Card>
        <Button variant="contained" onClick={() => navigate('/upload')} style={third}>Upload Another</Button>
        <img src="assets/mountainback.png" style={{position: 'absolute', width: '100vw', right: -10, top: -200, zIndex: -2,
                        transform: `scaleX(-1)`, 
                        opacity: .6
                        // transformOrigin:'left bottom'
                    }}/>
            <img src="assets/mountainfront.png" style={{position: 'absolute', width: '100vw', right: -10, top: 100, zIndex: -2,
            transform: `scaleX(-1)`, 
        }}/>
    </div>
  );
}

export default Results;
