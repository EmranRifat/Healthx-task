import React from 'react';
import './Hero.css'
import { FaCalendarAlt } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdHealthAndSafety } from "react-icons/md";

const Hero = () => {
    return (
        <div className="hero">
      <div className="hero-content">
        <div className="text-container">
          <h1 id='title'>Protect Your Health <br />And Take Care Of <br />Your Health</h1>



<div style={{display:"flex",paddingTop:"15px"}}>
<div style={{paddingRight:"30px"}}>
<div className='group'>
    <div style={{marginTop:"12px" ,paddingRight:"10px" ,color:"#0dabd3"}}>
        <FaCalendarAlt></FaCalendarAlt>
    </div>
    <div>
        <h1 style={{fontSize:"15px"}}>Make An Appointment</h1>
        <p style={{fontSize:"12px",color:"gray"}}>Schedule With Your Favorite Doctor <br />Anytime</p>
    </div>
</div>
<div className='group'>
    <div style={{marginTop:"12px" ,paddingRight:"1px" ,color:"#0dabd3"}}>
        <BsPersonFill style={{fontSize:"22px"}}></BsPersonFill>
    </div>
    <div style={{marginLeft:"5px"}}>
        <h1 style={{fontSize:"15px"}}>Find Your Best Doctor</h1>
        <p style={{fontSize:"12px",color:"gray"}}>Schedule With Your Favorite Doctor <br />Anytime</p>
    </div>
</div>
</div>
<div>
<div className='group'>
    <div style={{marginTop:"12px" ,paddingRight:"10px" ,color:"#0dabd3"}}>
        <MdHealthAndSafety style={{fontSize:"22px"}}></MdHealthAndSafety>
    </div>
    <div>
        <h1 style={{fontSize:"15px"}}>Health Guarentee Forever</h1>
        <p style={{fontSize:"12px",color:"gray"}}>Schedule With Your Favorite Doctor <br />Anytime</p>
    </div>
</div>
<div className='group'>
    <div style={{marginTop:"12px" ,paddingRight:"10px" ,color:"#0dabd3"}}>
        <HiLocationMarker style={{fontSize:"22px"}}></HiLocationMarker>
    </div>
    <div>
        <h1 style={{fontSize:"15px"}}>Spread in Various Places</h1>
        <p style={{fontSize:"12px",color:"gray"}}>Schedule With Your Favorite Doctor <br />Anytime</p>
    </div>
</div>

</div>




</div>


          <button className="cta-button">Book Now</button>
        </div>
      </div>
      <div className="hero-image">
      <img  src="../../assets/doctor.png" alt="" />
        {/* Add your image here */}
      </div>
    </div>
    );
};

export default Hero;