import React from 'react'

const Card = ({children}: {children: React.ReactNode}) => {
    return(
        <div style={{
            borderRadius: 20,
            backgroundColor: "#F2DFAF",
        }}>
            {children}
        </div>
    )
}

export default Card;