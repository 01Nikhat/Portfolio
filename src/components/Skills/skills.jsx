import React from 'react';
import "./skills.css";
import { RiReactjsLine } from "react-icons/ri"; // React
import { FaReact } from "react-icons/fa"; // Placeholder for React Native
import { SiTailwindcss } from "react-icons/si"; // Tailwind CSS
import { SiMysql } from "react-icons/si"; // MySQL
import { SiHtml5 } from "react-icons/si"; // HTML
import { FaCode } from "react-icons/fa"; // Placeholder for Java or generic programming icon

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h1 className="skillsTag">Skills</h1>
      <div className="skillsContainerList">
        <div className="skills">
          <RiReactjsLine className='react-icons' />
        </div>
        <div className="skills">
          <FaReact className='react-icons' /> {/* Use this as a placeholder for React Native */}
        </div>
        <div className="skills">
          <SiTailwindcss className='react-icons' />
        </div>
        <div className="skills">
          <SiMysql className='react-icons' />
        </div>
        <div className="skills">
          <SiHtml5 className='react-icons' />
        </div>
        <div className="skills">
          <FaCode className='react-icons' /> {/* Placeholder for Java */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
