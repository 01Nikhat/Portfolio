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
              Web Developer - <span className="experienceCompany">INA India Pvt. Ltd</span>
            </h6>
            <p className="experienceDescription">
              • Designed a full-featured restaurant app using React and Tailwind CSS with separate user/admin panels, reducing wait times via time-slot booking.
              • Developed a real-time booking system using calendar and time-picker components with admin-controlled availability.
              • Improved menu browsing performance by integrating debounced search, API-optimized lazy loading, and paginated rendering.
              • Streamlined client-server communication via Axios, supporting search, bookings, order updates, and user inquiries through a contact form.
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
              App Developer - <span className="experienceCompany">INA India Pvt. Ltd</span>
            </h6>
            <p className="experienceDescription">
              • Built a dynamic BMS dashboard in React with Chart.js to visualize real-time cell performance metrics.
              • Reduced system errors by 40% through robust API integration and input validation layers.
              • Implemented parameter-based and date-range search with debounced input; optimized data rendering by combining pagination with lazy loading for improved performance and plotted custom datasets using line charts.
              • Enabled CSV uploads with backend parsing and MySQL storage via custom REST APIs, enhancing data f lexibility.
              </p>
            <div className="technologies">
              <span className="technologyBadge">React Native</span>
              <span className="technologyBadge">Tailwind CSS</span>
              <span className="technologyBadge">REST APIs</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience;
