import React, { useState } from 'react';
import logo from '../images/logo.png';
import '../styles/navbar.css';

 const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" width={50} height={50} />
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Appointments</a></li>
        <li><a href="#">Chat</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">My details</a></li>
      </ul>
      <div className="nav-actions">
        <button className="login-btn">LogOut</button>
        <img src={logo} alt="Profile" className="profile-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
