import * as React from 'react';
import Box from '@mui/material/Box';
import ResponsiveAppBar from '../components/Navbar';

const box_style = {
    width: 665,
    height: 665,
    backgroundColor: '#F2DFAF',
    '&:hover': {
        backgroundColor: '#F2DFAF',
        opacity: [0.9, 0.8, 0.7],
    },
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '5%'
}

export default function Results() {
    return (
        <div>
            <ResponsiveAppBar />
            <div style={{paddingTop: '4em'}}>
                 <Box sx={box_style}>
                </Box> 
    
            </div>
        </div>
    ); 
       
      
  }
  