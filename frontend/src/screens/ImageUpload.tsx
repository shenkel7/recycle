import { Button, Card } from '@mui/material';
import React from 'react'
import ResponsiveAppBar from '../components/Navbar';
import ImageUploading, {ImageListType} from 'react-images-uploading';
import './ImageUpload.css'
import { Link, useNavigate } from "react-router-dom";
import { maxHeight, minHeight } from '@mui/system';

const cardStyle = {
  backgroundColor: "#F2DFAF",
  margin: 10,
  flex: 1,
  paddingTop: 30,
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '50vh',
  maxHeight: "70vh",
}

const dragCardStyle = {
  backgroundColor: "#E5C676",
  margin: 10,
  flex: 1,
  paddingTop: 30,
  justifyContent: 'center',
  alignItems: 'center',
  // height: '50vh'
  minHeight: '50vh',
  maxHeight: "70vh",

}

const third = {
  backgroundColor: "#5F6F3A",
  borderRadius: 15,
  padding: "9px 36px",
  fontSize: "18px",
  marginTop: 10,
  fontFamily: 'Lato',
}

const imageStyle = {
  width: 100,
  height: 95,
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

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImage(imageList as never[]);
  };

  return (
    <div className="App">
      <ResponsiveAppBar/>
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
                if(image.length === 0) {
                  onImageUpload() 
                } else {
                  onImageUpdate(0)
                }
              }}
              {...dragProps}>
              {
                image.length === 0 ? 
                <div>
                  <img style={imageStyle} src="/assets/file_icon.png"/>
                  <div style={textTitle}>Upload an Image</div>
                  <Button variant="contained" style={third}>Choose File</Button>
                </div>
              : 
                <>
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item" style={{height: "100%"}}>
                      <img src={image.dataURL} alt="" style={{maxHeight: "40vh"}}/>
                      <div className="image-item__btn-wrapper">
                        {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                        <Button variant="contained" style={third}>Update</Button>
  
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
                <img style={imageStyle} src="/assets/photo_icon.png" alt="photo_icon" />
                <div style={textTitle}>Take a Photo</div>
                <Button variant="contained" style={third}>Open Webcam</Button>
                </Card>
            
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default ImageUpload;
