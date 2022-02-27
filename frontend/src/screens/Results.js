import { Button, Card } from '@mui/material';
import React, { useEffect } from 'react'
import ResponsiveAppBar from '../components/Navbar';
import ImageUploading, {ImageListType} from 'react-images-uploading';
import { Link, useNavigate } from "react-router-dom";
import { maxHeight, minHeight } from '@mui/system';
import PizzaSlice from '../store/PizzaSlice';
import { useDispatch, useSelector } from 'react-redux';


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

  const image = useSelector(state => state.user.image)
  const imageFile = useSelector(state => state.user.imageFile)

  console.log(image)

useEffect(() => {

  return () => {
    dispatch(PizzaSlice.actions.setIndex(index + 1 > 1 ? 0 : index + 1))
  }
}, [])

  const resultDisplay = () => {
    if(index === 1) {
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
