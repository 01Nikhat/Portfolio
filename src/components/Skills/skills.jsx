import React from 'react';
import "./skills.css";
import { RiReactjsLine } from "react-icons/ri"; // React
import { FaReact } from "react-icons/fa"; // Placeholder for React Native
import { SiTailwindcss } from "react-icons/si"; // Tailwind CSS
import { SiMysql } from "react-icons/si"; // MySQL
import { SiHtml5 } from "react-icons/si"; // HTML
import { SiJavascript } from "react-icons/si"; // JavaScript icon
import { motion } from "framer-motion";

// Reusable function for icon animation
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h1 className="skillsTag">Skills</h1>
      <motion.div whileInView={{opacity:1,x:0}} 
      initial ={{opacity:0,x:-100}}
      transition={{duration:1.5}}
       className="skillsContainerList">
        
        {/* React */}
        <motion.div 
          variants={iconVariants(2.5)} 
          initial="initial" 
          animate="animate" 
          className="skills"
        >
          <RiReactjsLine className='react-icons' color='cyan' />
          <h3 className='tag'>React</h3>
        </motion.div>

        {/* React Native */}
        <motion.div 
          variants={iconVariants(3)} 
          initial="initial" 
          animate="animate" 
          className="skills"
        >
          <FaReact className='react-icons' color='red' />
          <h3 className='tag'>React Native</h3>
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div 
          variants={iconVariants(5)} 
          initial="initial" 
          animate="animate" 
          className="skills"
        >
          <SiTailwindcss className='react-icons' />
          <h3 className='tag'>Tailwind CSS</h3>
        </motion.div>

        {/* MySQL */}
        <motion.div 
          variants={iconVariants(2)} 
          initial="initial" 
          animate="animate" 
          className="skills"
        >
          <SiMysql className='react-icons' color="green" />
          <h3 className='tag'>MySQL</h3>
        </motion.div>

        {/* HTML */}
        <motion.div 
          variants={iconVariants(6)} 
          initial="initial" 
          animate="animate" 
          className="skills"
        >
          <SiHtml5 className='react-icons' color='#FB4700' />
          <h3 className='tag'>HTML</h3>
        </motion.div>

        {/* JavaScript */}
        <motion.div 
          variants={iconVariants(2.5)} 
          initial="initial" 
          animate="animate" 
          className="skills"
        >
          <SiJavascript className='react-icons' color='orange' />
          <h3 className='tag'>JavaScript</h3>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Skills;
