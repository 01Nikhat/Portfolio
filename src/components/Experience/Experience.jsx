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
            <p className="year">Mar 2024- Apr 2025</p>
          </div>
          <div className="experienceContent">
            <h6 className="experienceRole">
              Software Engineer - <span className="experienceCompany">INA India Pvt. Ltd</span>
            </h6>
           
             <p className="experienceDescription">
                • Built a comprehensive restaurant web app using React and Tailwind CSS, featuring separate user and admin panels for efficient management.<br />
                • Implemented a real-time time-slot booking system with calendar and time-picker controls, enabling the admin to manage availability.<br />
                • Enhanced menu browsing using debounced search, lazy loading, and pagination for smoother performance.<br />
                • Optimized API communication with Axios to handle user search, bookings, order updates, and contact form submissions.
              </p>
           
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
            <p className="year">Apr 2023- jan 2024</p>
          </div>
          <div className="experienceContent">
            <h6 className="experienceRole">
              Software Engineer - <span className="experienceCompany">INA India Pvt. Ltd</span>
            </h6>
           <p className="experienceDescription">
              • Developed a dynamic BMS dashboard using React and Chart.js to visualize real-time cell performance metrics.<br />
              • Minimized system errors by 40% through robust API integration and comprehensive input validation.<br />
              • Implemented parameter-based and date-range search with debounced input; optimized data rendering using pagination and lazy loading, and visualized custom datasets with interactive line charts.<br />
              • Enabled CSV file uploads with backend parsing and MySQL storage using custom REST APIs, increasing data flexibility and accessibility.
            </p>

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
