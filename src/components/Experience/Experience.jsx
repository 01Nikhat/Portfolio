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
              Software Engineer - <span className="experienceCompany">INA India Pvt. Ltd</span>
            </h6>
           
             <p className="experienceDescription">
               • Built responsive and accessible UI using React.js, ensuring smooth user interactions 
               • Developed a real-time booking system with user and admin panels 
               • Enhanced performance using debounced search, lazy loading, and pagination 
               • Integrated RESTful APIs using Axios for seamless data handling 
               • Designed reusable and scalable components for maintainable UI architecture 
               • Improved performance by reducing re-renders and optimizing load time by approx 30% </p>
           
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
            <p className="year">Aug 2023- Jan 2024</p>
          </div>
          <div className="experienceContent">
            <h6 className="experienceRole">
              Software Engineer - <span className="experienceCompany">INA India Pvt. Ltd</span>
            </h6>
           <p className="experienceDescription">
              • Developed a real-time dashboard using React.js and Tailwind CSS
              • Integrated and consumed REST APIs for live and historical data
              • Built modular reusable components for data visualization
              • Optimized Chart.js performance for large datasets
              • Implemented search, filtering, and pagination
              • Improved load time by approx 23% through efficient data handling and rendering optimizations </p>

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
