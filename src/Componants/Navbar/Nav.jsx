import React from 'react';
import "./Nav.css";
import { SiPython } from "react-icons/si";

const Nav = () => {
    return (
        <div>
          <nav className="navbar">
      <h1 className="navbar-logo "><SiPython></SiPython> WeCare</h1>
      <ul className="navbar-list">
        <li className="navbar-item">Feature</li>
        <li className="navbar-item">About Us</li>
        <li className="navbar-item">Fasilities</li>
        <li className="navbar-item">Find Doctor</li>
        <li className="navbar-item">Contact</li>
        <button className="nav-button">Book Now</button>
      </ul>
    </nav>   
  
        </div>
    );
};

export default Nav;