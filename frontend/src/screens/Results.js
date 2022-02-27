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
  paddingTop: 30,
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
  const dispatch = useDispatch();
  const index = useSelector(state => state.user.index)

useEffect(() => {

  return () => {
    dispatch(PizzaSlice.actions.setIndex(index + 1 > 2 ? 0 : index + 1))
  }
}, [])

  const resultDisplay = () => {
    if(index === 2) {
      return(
        <div>
          This item is NOT recyclable.
        </div>
      )
    } else {
      return (
        <div>
        This item is recyclable!
        </div>
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
            {resultDisplay()}

            {/* <img style={imageStyle} src="/assets/photo_icon.png" alt="photo_icon" />
            <div style={textTitle}>Take a Photo</div> */}
        </Card>
        <Button variant="contained" onClick={() => navigate('/upload')} style={third}>Upload Another</Button>
    </div>
  );
}

export default Results;
