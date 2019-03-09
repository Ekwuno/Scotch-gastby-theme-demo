import React from 'react'
import color from '../tokens/color';

 const Info = ({children}) =>{
    return(
    <div
        style = {{
            padding: "1rem",
            backgroundColor: color.primary 
        }}
    >
        {children}
    </div>
    );
}

export default Info