import React from 'react'
import ResponsiveAppBar from '../components/Navbar'
import Button from '@mui/material/Button';
import './Home.css'
const first = {
    color: 'black',
    paddingTop: '2em',
    textAlign: 'left',
    position: 'relative',
    left: '100px',
    fontSize: '42px',
    width: '870px',
    fontFamily: 'Lato',
    fontWeight: '700'
}

const second = {
    color: 'black',
    textAlign: 'left',
    position: 'relative',
    left: '100px',
    opacity: '0.5',
    fontFamily: 'Lato',
    fontWeight: '700'
}

const Home = () => {
    return (
        <div>
            <ResponsiveAppBar />
            <div style={first}>
                <h1>Find out if an item is recyclable.</h1>
            </div>
            <div style={second}>
                <h2>Click the button below to begin.</h2>
            </div>
            {/* <Button variant="contained" style= {{backgroundColor: "#21b6ae"}}>Contained</Button> */}
        </div>
    )
}

export default Home;