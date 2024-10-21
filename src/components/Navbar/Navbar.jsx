import React from 'react'
import {Link} from "react-scroll";
import github from "../../images/github.png";
import "./navbar.css";
import contact from "../../images/contact.png";





const Navbar = () => {
  return (
    <nav className='navContainer'>
      <p className='logo'>PORTFOLIO</p>
     
      <div className="navMenu">
      <Link to="home" smooth={true} duration={500} className='navbarListItem'>Home</Link>
      <Link to="about" smooth={true} duration={500} className='navbarListItem'>About</Link>
      <Link to="skills" smooth={true} duration={500} className='navbarListItem'>Skills</Link>
      <Link to="experience" smooth={true} duration={500} className='navbarListItem'>Experience</Link>
      <Link to="projects" smooth={true} duration={500} className='navbarListItem'>Projects</Link>
      </div>
     
      <button className="ContactButton">
        <img src={contact} className='Contactlogo'/>Contact Me
      </button>
      
    </nav>
  )
}

export default Navbar
