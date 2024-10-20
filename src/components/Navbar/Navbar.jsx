import React from 'react'
import {Link} from "react-scroll";
import github from "../../images/github.png";
import "./navbar.css";
import contact from "../../images/contact.png"




const Navbar = () => {
  return (
    <nav className='navContainer'>
      <p className='logo'>PORTFOLIO</p>
     
      <div className="navMenu">
        <Link className='navbarListItem'>Home</Link>
        <Link className='navbarListItem'>About</Link>
        <Link className='navbarListItem'>Skills</Link>
        <Link className='navbarListItem'>Experience</Link>
        <Link className='navbarListItem'>Projects</Link>
      </div>
     
      <button className="ContactButton">
        <img src={contact} className='Contactlogo'/>Contact Me
      </button>
      
    </nav>
  )
}

export default Navbar
