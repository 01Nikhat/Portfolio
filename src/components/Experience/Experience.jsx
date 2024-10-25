import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <div className="experienceContainer">
      <h1 className="experienceTag">Experience</h1>
      <div className="experienceList">

        {/* Experience 1 */}
        <div className="experienceItem">
          <div className="experienceYear">
            <p className="year">2023-present</p>
          </div>
          <div className="experienceContent">
            <h6 className="experienceRole">
              Web Developer - <span className="experienceCompany">INA India Pvt. Ltd</span>
            </h6>
            <p className="experienceDescription">
              Designed and developed user interfaces for web applications using React.js. Worked closely with backend developers to integrate frontend components with Node.js APIs, implemented responsive design, and optimized frontend performance.
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
            <p className="year">2023-present</p>
          </div>
          <div className="experienceContent">
            <h6 className="experienceRole">
              App Developer - <span className="experienceCompany">INA India Pvt. Ltd</span>
            </h6>
            <p className="experienceDescription">
              Designed and developed user interfaces for mobile applications using React Native. Collaborated with backend developers to integrate frontend components with Node.js APIs, ensured responsive design, and enhanced frontend performance.
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
