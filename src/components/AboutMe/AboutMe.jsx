import React, { useEffect } from 'react';
import profile from "../../images/dp.jpg";
import "./AboutMe.css";
import {motion} from "framer-motion";

const AboutMe = () => {
 
  return (
    <div className="aboutmeContainer">
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:0.5}}
      className="leftContainer">
      
        <div className="image-container">
          
          <img src={profile} alt="Profile Picture" />
          
        </div>
        
      </motion.div>

      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:100}}
      transition={{duration:0.5}}
      className="rightContainer">
        <h2> <span className='about'>About</span> Me</h2>
        <p>
          Hi, I'm Nikhat Parvin, a software developer with expertise in React.js, Node.js, and more.
          I have a passion for creating dynamic and responsive web applications...
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
