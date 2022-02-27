import { Button, Card } from '@mui/material';
import React from 'react'
import ResponsiveAppBar from '../components/Navbar';
import ImageUploading, {ImageListType} from 'react-images-uploading';
import { Link, useNavigate } from "react-router-dom";
import { maxHeight, minHeight } from '@mui/system';

const cardStyle = {
  backgroundColor: "#F2DFAF",
  marginTop: '8vh',
  marginRight: '10vw',
  marginLeft: '10vw',
  flex: 1,
  paddingTop: 30,
  paddingBottom: 30,
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '60vh',
//   maxHeight: "70vh",
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
  width: 100,
  height: 95,
}

const textTitle = {
    fontFamily: 'Lato',
    fontSize: 30,
    marginTop: 20,
    fontWeight: 100
}

const Results = () => {
  const [image, setImage] = React.useState([]);
  const maxNumber = 69;
  let navigate = useNavigate();

  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Card
            // onMouseEnter={toggleWebcamHover}
            style={cardStyle}
            onClick={() => {
            }}
            >
            {/* <img style={imageStyle} src="/assets/photo_icon.png" alt="photo_icon" />
            <div style={textTitle}>Take a Photo</div> */}
        </Card>
        <Button variant="contained" style={third}>Upload Another</Button>
    </div>
  );
}

export default Results;
