import React from 'react'
import './Webcam.css'
import {Camera} from '../components/Camera'
import ResponsiveAppBar from '../components/Navbar'

const Webcam = () => {
    return (
        <div>
            <ResponsiveAppBar />
            <div>
                <Camera />
            </div>
        </div>
    )
}

export default Webcam;