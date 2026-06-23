import React from 'react';
import './experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="experienceContainer">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="experienceTag">Experience</motion.h1>
      
      <div className="experienceList">

        {/* Experience 1 */}
        <div className="experienceItem">
          <div className="experienceYear">
            <p className="year">Mar 2024- Present</p>
          </div>
          <div className="experienceContent">
            <h6 className="experienceRole">
              Software Developer - <span className="experienceCompany">INA Internet Group</span>
            </h6>
           
             <ul className="experienceDescription">
              <li>Built responsive and accessible UI using React.js, ensuring smooth user interactions</li>
              <li>Developed a real-time booking system with user and admin panels</li>
              <li>Enhanced performance using debounced search, lazy loading, and pagination</li>
              <li>Integrated RESTful APIs using Axios for seamless data handling</li>
              <li>Designed reusable and scalable components for maintainable UI architecture</li>
              <li>Improved performance by reducing re-renders and optimizing load time by approx 30%</li>
            </ul>
           
            <div className="technologies">
              <span className="technologyBadge">React.js</span>
              <span className="technologyBadge">Tailwind CSS</span>
              <span className="technologyBadge">REST APIs</span>
            </div>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="experienceItem">
          <div className="experienceYear">
            <p className="year">Oct 2023- Jan 2024</p>
          </div>
          <div className="experienceContent">
            <h6 className="experienceRole">
              Software Developer - <span className="experienceCompany">INA Internet Group</span>
            </h6>
           <ul className="experienceDescription">
              <li>Developed a real-time dashboard using React.js and Tailwind CSS</li>
              <li>Integrated and consumed REST APIs for live and historical data</li>
              <li>Built modular reusable components for data visualization</li>
              <li>Optimized Chart.js performance for large datasets</li>
              <li>Implemented search, filtering, and pagination</li>
              <li>Improved load time by approx 23% through efficient data handling and rendering optimizations</li>
            </ul>

            <div className="technologies">
              <span className="technologyBadge">React.js</span>
              <span className="technologyBadge">CSS</span>
              <span className="technologyBadge">REST APIs</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience;
