import React from 'react'
// import color from 'scotchy-theme';
import {color}  from 'scotchy-theme'

 const Info = ({children}) =>{
    return(
    <div
        style = {{
            padding: "10rem",
            background : color.primary,
            fontSize : '30px'
        }}
    >
        {children}
    </div>
    );
}

export default Info 