import React, { useEffect } from 'react';
import profile from "../../images/dp.jpg";
import "./AboutMe.css";

const AboutMe = () => {
 
  return (
    <div className="aboutmeContainer">
      <div className="leftContainer">
        <div className="image-container">
          <img src={profile} alt="Profile Picture" />
        </div>
      </div>

      <div className="rightContainer">
        <h2> <span className='about'>About</span> Me</h2>
        <p>
          Hi, I'm Nikhat Parvin, a software developer with expertise in React.js, Node.js, and more.
          I have a passion for creating dynamic and responsive web applications...
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
