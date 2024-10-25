import React, { useState } from 'react';
import { Link } from "react-scroll";
import github from "../../images/github.png";
import "./navbar.css";
import contact from "../../images/contact.png";
import 'boxicons';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className='navContainer'>
      <p className='logo' >NIKHAT</p>
     
      {/* Menu Items */}
      <div className={`navMenu ${sidebarOpen ? 'open' : ''}`}>
        <Link to="intro" smooth={true} duration={500} className='navbarListItem'>Home</Link>
        <Link to="about" smooth={true} duration={500} className='navbarListItem'>About</Link>
        <Link to="skills" smooth={true} duration={500} className='navbarListItem'>Skills</Link>
        <Link to="contact" smooth={true} duration={500} className='navbarListItem'>Experience</Link>
        <Link to="project" smooth={true} duration={500} className='navbarListItem'>Projects</Link>
        <Link to="contact" smooth={true} duration={500} className='navbarListItem'>Contacts</Link>
      </div>

      {/* Sidebar Menu Icon */}
      {!sidebarOpen && (
        <div className="sidebarMenu" onClick={handleSidebarToggle}>
          <box-icon name='menu' color="#0ef"></box-icon>
        </div>
      )}

      {/* Sidebar Close Icon */}
      {sidebarOpen && (
        <div className="sidebarCross" onClick={handleSidebarToggle}>
          <box-icon name='x-circle' color="#0ef"></box-icon>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
