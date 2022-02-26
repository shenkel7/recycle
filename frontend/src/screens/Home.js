import React from 'react'
import ResponsiveAppBar from '../components/Navbar'
import Button from '@mui/material/Button';
import './Home.css'
import recycle_icon from '../images/recycle 1.svg'

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
    paddingBottom: '2em',
    textAlign: 'left',
    position: 'relative',
    left: '100px',
    opacity: '0.5',
    fontFamily: 'Lato',
    fontWeight: '700'
}

const third = {
    backgroundColor: "#5F6F3A",
    position: 'absolute',
    left: '100px',
    borderRadius: 15,
    padding: "9px 36px",
    fontSize: "18px"
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
            <Button variant="contained" style={third}>START</Button>
        </div>
    )
}

export default Home;