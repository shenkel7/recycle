import { Button, Card } from '@mui/material';
import React from 'react'
import ResponsiveAppBar from '../components/Navbar';
import ImageUploading, {ImageListType} from 'react-images-uploading';
import './ImageUpload.css'

const cardStyle = {
  backgroundColor: "#F2DFAF",
  margin: 10,
  flex: 1,
  padding: 10,
  justifyContent: 'center',
  alignItems: 'center',

}

const imageStyle = {
  width: 100,
  height: 95,
}

const ImageUpload = () => {
  const [image, setImage] = React.useState([]);
  const maxNumber = 69;

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
            {/* <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button> */}
            <div style={{display: 'flex', padding: 50}}>
              
              <Card variant="outlined"
              className="card"
              style={isDragging ? {} : cardStyle}
              onClick={onImageUpload}
              {...dragProps}>
              <img style={imageStyle} src="/assets/file_icon.png"/>
              </Card>

              &nbsp;
              <Card
              style={cardStyle}
              onClick={onImageRemoveAll}>
                <img style={imageStyle} src="/assets/photo_icon.png" alt="photo_icon" />
                </Card>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image.dataURL} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default ImageUpload;
