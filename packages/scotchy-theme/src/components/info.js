import React from 'react'

 const Info = ({children}) =>{
    return(
    <div
        style = {{
            padding: "1rem",
            backgroundColor: "blue"
        }}
    >
        {children}
    </div>
    );
}

export default Info