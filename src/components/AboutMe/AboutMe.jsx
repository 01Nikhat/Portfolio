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
         I'm Nikhat, a Software Developer at INA Internet Group with nearly 3 years of experience building responsive, user-focused web applications.
         I mainly work with React.js, JavaScript (ES6+), Redux Toolkit, and Tailwind CSS, and I enjoy turning ideas into fast, clean interfaces, from component structure to performance tuning.
         At work, I've built the patient and admin panels for a doctor appointment platform, along with its booking APIs and JWT login, and a real-time restaurant reservation platform.
         Outside work, I built Artify, a full-stack AI app for text-to-image generation and background removal with Razorpay payments.
         I'm currently learning TypeScript and Next.js to keep growing as a full-stack developer.
       </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
