import { Button, Card } from '@mui/material';
import React, {useRef} from 'react'
import ResponsiveAppBar from '../components/Navbar';
import ImageUploading, {ImageListType} from 'react-images-uploading';
import './ImageUpload.css'
import { Link, useNavigate } from "react-router-dom";
import { maxHeight, minHeight } from '@mui/system';
import cam from '../images/photo.svg'
import { useDispatch } from 'react-redux';
import PizzaSlice from '../store/PizzaSlice';

const cardStyle = {
  backgroundColor: "#F2DFAF",
  margin: '2%',
  flex: 1,
  paddingTop: 30,
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '60vh',
  maxHeight: "80vh",
  borderRadius: 20,
}

const dragCardStyle = {
  backgroundColor: "#E5C676",
  margin: '2%',
  flex: 1,
  paddingTop: 30,
  justifyContent: 'center',
  alignItems: 'center',
  // height: '50vh'
  minHeight: '60vh',
  maxHeight: "80vh",
  borderRadius: 20,
}

const third = {
  backgroundColor: "#5F6F3A",
  borderRadius: 15,
  padding: "9px 36px",
  fontSize: "18px",
  marginTop: 10,
  margin: 10,
  fontFamily: 'Lato',
}

const imageStyle = {
  width: '15vw',
  // height: '10vh',
  alignSelf: 'center',
  // marginTop: '30%',
}

const textTitle = {
    fontFamily: 'Lato',
    fontSize: 30,
    marginTop: 20,
    fontWeight: 100
}

const ImageUpload = () => {
  const [image, setImage] = React.useState([]);
  const maxNumber = 69;
  let navigate = useNavigate();
  const nextRef = useRef(0);
  const dispatch = useDispatch()

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImage(imageList as never[]);
    dispatch(PizzaSlice.actions.setImage(imageList[0].dataURL ?? ''));
    dispatch(PizzaSlice.actions.setImageFile(imageList[0]));
  };

  return (
    <div className="App">
      <ResponsiveAppBar/>
      <div style={{ height: '100vh', overflow: 'hidden'}}>

      <ImageUploading
        value={image}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <div style={{display: 'flex', padding: 50}}>
              
              <Card variant="outlined"
              className="card"
              style={(image.length !== 0 || isDragging) ? dragCardStyle : cardStyle}
              onClick={() => {
                if(nextRef.current === 1)
                  return;
                if(image.length === 0) {
                  onImageUpload() 
                } else {
                  onImageUpdate(0)
                }
              }}
              {...dragProps}>
              {
                image.length === 0 ? 
                <div style={{alignItems: 'center', justifyContent: 'center', padding: '10%'}}>
                  <img style={imageStyle} src="/assets/file_icon.png"/>
                  <div style={textTitle}>Upload an Image</div>
                  <Button variant="contained" style={third}>Choose File</Button>
                </div>
              : 
                <>
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item" style={{height: "100%"}}>
                      <img src={image.dataURL} alt="" style={{maxWidth: "40vw"}}/>
                      <div className="image-item__btn-wrapper">
                        {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                        <Button variant="contained" style={third}>Update</Button>
                        <Button variant="contained" style={third} onClick={() => {navigate("/results")
                        nextRef.current = 1;
                      }}>Next</Button>
  
                      </div>
                    </div>
                  ))}
                </>
              }
              </Card> 
              &nbsp;
              <Card
              // onMouseEnter={toggleWebcamHover}
              style={cardStyle}
              onClick={() => {
                navigate("/webcam");
              }}
              >
                <div style={{alignItems: 'center', justifyContent: 'center', padding: '10%'}}>

                <img style={imageStyle} src={cam} alt="photo_icon" />
                <div style={textTitle}>Take a Photo</div>
                <Button variant="contained" style={third}>Open Webcam</Button>
            </div>
                </Card>
            </div>
          </div>
        )}
      </ImageUploading>
      <img src="assets/mountainback.png" style={{position: 'absolute', width: '100vw', right: -10, top: -300, zIndex: -1}}/>
      <img src="assets/mountainfront.png" style={{position: 'absolute', width: '100vw', right: -10, top: 0, zIndex: -1}}/>
      </div>

    </div>
  );
}

export default ImageUpload;
