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
          I'm Nikhat, a Software Developer at INA Internet Group with close to 3 years of experience building responsive, user-focused web applications.
         I specialize in React.js, JavaScript (ES6+), Redux Toolkit, and Tailwind CSS, with hands-on experience integrating REST APIs and working across 
         the full frontend development lifecycle — from component architecture to performance optimization.
         I've delivered production systems including a real-time booking platform and an EV battery monitoring dashboard, along with personal projects like Artify, an AI-powered image editing tool.
         I enjoy solving UI challenges, writing clean and reusable code, and continuously expanding my skill set into backend technologies like Node.js and TypeScript.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
