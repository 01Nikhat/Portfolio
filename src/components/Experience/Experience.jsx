import React from 'react';
import './experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="experienceContainer">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="experienceTag"
      >
        Experience
      </motion.h1>

      <div className="experienceList">

        {/* Experience 1 */}
        <div className="experienceItem">
          <div className="experienceYear">
            <p className="year">Aug 2024 - Present</p>
          </div>
          <div className="experienceContent">
            <h6 className="experienceRole">
              Software Developer - <span className="experienceCompany">INA Internet Group</span>
            </h6>
            <p className="experienceProject">Doctor Appointment & Healthcare Management Platform</p>

            <ul className="experienceDescription">
              <li>Built the patient and admin panels in React.js, where patients browse doctors, check live slot availability, and book and manage appointments</li>
              <li>Developed appointment booking APIs with slot validation in Node.js and Express.js, preventing double bookings</li>
              <li>Implemented JWT authentication with access and refresh tokens so users stay securely signed in</li>
              <li>Created reusable React components shared across both panels for a consistent, responsive experience</li>
              <li>Integrated REST APIs using Axios to keep booking and appointment data in sync</li>
              <li>Reduced page load time by about 12% with lazy loading, debounced search, React.memo, and useCallback</li>
            </ul>

            <div className="technologies">
              <span className="technologyBadge">React.js</span>
              <span className="technologyBadge">Node.js</span>
              <span className="technologyBadge">Express.js</span>
              <span className="technologyBadge">MongoDB</span>
              <span className="technologyBadge">JWT</span>
            </div>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="experienceItem">
          <div className="experienceYear">
            <p className="year">Aug 2023 - Mar 2024</p>
          </div>
          <div className="experienceContent">
            <h6 className="experienceRole">
              Software Developer - <span className="experienceCompany">INA Internet Group</span>
            </h6>
            <p className="experienceProject">Real-Time Restaurant Reservation Platform</p>

            <ul className="experienceDescription">
              <li>Developed a real-time table booking system with user and admin panels, making reservation management faster for restaurant staff</li>
              <li>Built a responsive, accessible UI in React.js using a reusable, scalable component structure</li>
              <li>Improved frontend performance by about 23% through lazy loading, Cloudinary image optimization, debounced search, and React.memo</li>
              <li>Worked with the backend team to integrate REST APIs and handle real-time data smoothly</li>
            </ul>

            <div className="technologies">
              <span className="technologyBadge">React.js</span>
              <span className="technologyBadge">Tailwind CSS</span>
              <span className="technologyBadge">REST APIs</span>
              <span className="technologyBadge">Cloudinary</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
