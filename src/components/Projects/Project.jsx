import React from 'react';
import "./project.css";
import project1 from "../../images/project1.jpeg"
import project2 from "../../images/project2.jpeg"
import project3 from "../../images/project3.jpeg"
import project4 from "../../images/project4.jpeg"

const Project = () => {
  return (
    <div id='project'>
      <div className="Container">
        <h1 className="sub-title">My Projects</h1>
        <div className="projectList">
          <div className="project">
            <img src={project1} />
            <div className="layer">
              <h3>Weather App</h3>
              <p>This Weather App is built using  React Native , Redux, OpenWeather API. It provides real-time weather updates based on the user's current location or a searched city.</p>
            </div>
          </div>
          <div className="project">
            <img src={project2} />
            <div className="layer">
              <h3>Myntra Clone</h3>
              <p>A replica of the Myntra e-commerce platform, built using [React.js, Node.js, etc.]. It includes features like product listings, search and filter options, detailed product pages, cart management, and user authentication. The app is fully responsive and offers a good experience across devices.</p>
            </div>
          </div>
          <div className="project">
            <img src={project3} />
            <div className="layer">
              <h3>Blog Website</h3>
              <p>A blog website built using Angular for the front-end and Firebase/MySQL for the back-end. It allows users to create, edit, and delete posts, with real-time data updates. Features include user authentication, post management, and a responsive design for smooth navigation across devices. Firebase handles real-time database management, while MySQL is used for more structured data storage.</p>
            </div>
          </div>
          <div className="project">
            <img src={project4} />
            <div className="layer">
              <h3>Portfolio Website</h3>
              <p>A personal portfolio website built using React.js, HTML, and CSS to showcase projects and skills. It features a dynamic user interface with smooth animations, a typewriter effect, and responsive design. The site includes sections for about, projects, contact, and social media links, providing an engaging way to highlight professional work and achievements.</p>
            </div>
          </div>
        </div>
        <a href="#" className='btn'>See More</a>
      </div>
    </div>
  )
}

export default Project
