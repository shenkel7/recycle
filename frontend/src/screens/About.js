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
  padding: 50,
  paddingTop: 30,
  paddingBottom: 30,
  justifyContent: 'center',
  alignItems: 'flex-start',
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
    fontWeight: 200,
    letterSpacing: 1.5,
    marginBottom: 10,
}

const About = () => {
  const [image, setImage] = React.useState([]);
  const maxNumber = 69;
  let navigate = useNavigate();

  return (
    <div className="App">
      <ResponsiveAppBar/>
      <div style={{flexDirection: "column"}}>

            <Card
                // onMouseEnter={toggleWebcamHover}
                style={cardStyle}
                onClick={() => {
                }}
                >
                <div style={textTitle}>Reduce,  Reuse,  Recycle</div>
                <div>
                    According to the Environmental Protection Agency, 292.4 million tons of 
                    Municipal Solid Waste (in other words, trash) was produced in the United States in 2018.
                    Of those 292.4 million tons, 94 million were recycled and composted: a recycling rate of 32.1
                    percent. While nothing to scoff at, that still means a whopping 200 million tons of plastic
                    <br /><br/>
                    To put that into perspective, that means 

                </div>
                <img style={imageStyle} src="/assets/photo_icon.png" alt="photo_icon" />
            </Card>
        </div>
    </div>
  );
}

export default About;
