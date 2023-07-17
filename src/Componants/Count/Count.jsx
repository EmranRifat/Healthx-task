import React from 'react';
import "./Count.css"

const Count = () => {
    return (
        <div className='parent' >
         <div className='count' >
         <div>
            <h1 style={{color:"#0dabd3"}}>250</h1>
            <p style={{color:'gray',fontSize:"14px"}}>Best Doctor</p>
           </div> 
           <div>
            <h1 style={{color:"#0dabd3"}}>15</h1>
            <p style={{color:'gray',fontSize:"14px"}}>Clinic Location</p>
           </div> 
           <div>
            <h1 style={{color:"#0dabd3"}}>20</h1>
            <p style={{color:'gray',fontSize:"14px"}}>Surgery Room</p>
           </div> 
           <div>
            <h1 style={{color:"#0dabd3"}}>+1500</h1>
            <p style={{color:'gray',fontSize:"14px"}}>Patient Capacity</p>
           </div> 
         </div>
        </div>
    );
};

export default Count;