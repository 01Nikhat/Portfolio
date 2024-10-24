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
      <p className='logo'>PORTFOLIO</p>
     
      {/* Menu Items */}
      <div className={`navMenu ${sidebarOpen ? 'open' : ''}`}>
        <Link to="home" smooth={true} duration={500} className='navbarListItem'>Home</Link>
        <Link to="about" smooth={true} duration={500} className='navbarListItem'>About</Link>
        <Link to="skills" smooth={true} duration={500} className='navbarListItem'>Skills</Link>
        <Link to="experience" smooth={true} duration={500} className='navbarListItem'>Experience</Link>
        <Link to="projects" smooth={true} duration={500} className='navbarListItem'>Projects</Link>
        <Link to="Contacts" smooth={true} duration={500} className='navbarListItem'>Contacts</Link>
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
