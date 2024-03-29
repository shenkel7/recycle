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
  paddingRight: '10vw',
  paddingLeft: '10vw',
  paddingTop: 30,
  paddingBottom: 30,
  justifyContent: 'center',
  alignItems: 'flex-start',
  minHeight: '60vh',
    borderRadius: 20,
    marginBottom: '8vh',
    maxWidth: 1000,
    alignSelf: 'center',
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
    margin: 20,
  width: '50%',
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
      <div style={{flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>

            <Card
                // onMouseEnter={toggleWebcamHover}
                style={cardStyle}
                onClick={() => {
                }}
                >
                <div style={textTitle}>Reduce,  Reuse,  Recycle</div>
                <img style={imageStyle} src="/assets/pexels-photo-761297.jpeg" alt="photo_icon" />
                <div style={{fontSize: 20, textAlign: 'left', marginBottom: 20}}>
                    According to the Environmental Protection Agency, 292.4 million tons of 
                    Municipal Solid Waste (in other words, trash) was produced in the United States in 2018.
                    Of those 292.4 million tons, 94 million were recycled and composted: a recycling rate of 32.1
                    percent. While nothing to scoff at, that still means a whopping 200 million tons of plastic end up 
                    landfills or as litter every year. With a growing garbage patch of plastic in the Pacific and carbon
                    emissions that are projected to overshoot our allowed "tipping point" for global warming,
                    we know something needs to change.
                    <br /><br/>
                    Reduce, reuse, recycle. The first two are more effective than recycling, but we recognize
                    that some things are neither; that's what our app is for! Using machine learning, we've created
                    a model to categorize things as either recyclable or non-recyclable to help us in our quest for
                    a more sustainable world.

                </div>


                <Button variant="contained" style={third} onClick={() => {navigate("/upload")
                      }}>Check Recyclables!</Button>
                <div>
                  Brought to you with &lt;3 from team MAK(book)!
                </div>
            </Card>
            <img src="assets/mountainback.png" style={{position: 'absolute', width: '100vw', right: -10, top: -300, zIndex: -1}}/>
      <img src="assets/mountainfront.png" style={{position: 'absolute', width: '100vw', right: -10, top: 0, zIndex: -1}}/>
        </div>
    </div>
  );
}

export default About;
