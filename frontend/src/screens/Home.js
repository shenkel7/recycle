import ResponsiveAppBar from '../components/Navbar'
import Button from '@mui/material/Button';
import recycle_icon from '../images/recycle 1.svg'
import { Link, useNavigate } from "react-router-dom";


const first = {
    color: 'black',
    // paddingTop: '2em',
    textAlign: 'left',
    position: 'relative',
    left: '100px',
    fontSize: '42px',
    width: '870px',
    // fontFamily: 'Lato',
    fontWeight: '700'
}

const second = {
    color: 'black',
    paddingBottom: '2em',
    textAlign: 'left',
    position: 'relative',
    left: '100px',
    opacity: '0.5',
    // fontFamily: 'Lato',
    fontWeight: '700'
}

const third = {
    backgroundColor: "#5F6F3A",
    position: 'absolute',
    left: '100px',
    borderRadius: 15,
    padding: "9px 36px",
    fontSize: "18px",
    fontFamily: "Lato",
}

const row = {
    display: 'flex'
}

const column = {
    flex: 1,
    padding: "10px"
}

const image = {
    paddingTop: '1em',
    position: 'absolute',
    // opacity: .7,
    right: "5vw",
    // height: '60vh',
    top: '30vh',
    zIndex: -1
}

const Home = () => {
    return (
        <div>
            <ResponsiveAppBar />
            <div style={row}>
                <div style={column}>
                    <div style={first}>
                        <h1>Find out if an item is recyclable.</h1>
                    </div>
                    <div style={second}>
                        <h2>Sustainability, one item at a time.</h2>
                    </div>
                    <Link to="/upload">
                        <Button variant="contained" style={third}>START</Button>
                    </Link>
                </div>
                <div style={column}>
                    <div >
                        <img style={image} src={recycle_icon} alt="recycling icon" />
                    </div>
                    
                </div>
            </div>

            <div style={{height: '2vh', overflow: 'hidden'}}>
            <img src="assets/mountainback.png" style={{position: 'absolute', width: '100vw', right: -10, top: -200, zIndex: -2,
                        transform: `scaleX(-1)`, 
                        // transformOrigin:'left bottom'
                    }}/>
            <img src="assets/mountainfront.png" style={{position: 'absolute', width: '100vw', right: -10, top: 100, zIndex: -2,
            transform: `scaleX(-1)`, 
        }}/>
        </div>
        </div>
    )
}

export default Home;