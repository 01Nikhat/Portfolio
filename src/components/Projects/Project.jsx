import React from 'react';
import "./project.css";
import project1 from "../../images/project1.jpeg"
import project2 from "../../images/project2.jpeg"
import project3 from "../../images/project3.jpeg"
import project4 from "../../images/project4.jpeg"
import project5 from "../../images/project5.jpeg"
import project6 from "../../images/project6.jpeg"

const Project = () => {
  return (
    <div id='project'>
      <div className="Container">
        <h1 className="sub-title">My Projects</h1>
        <div className="projectList">
{/*           <div className="project">
            <img src={project5} />
            <div className="layer">
            <h3>Food Restaurant Website</h3>
            <p>I have developed a fully functional food restaurant website with distinct interfaces – one for users and another for admin management. Built using React.js for the frontend and Node.js with MongoDB for the backend, it ensures a seamless user experience. The admin interface allows managing products by adding or deleting them and updating order statuses, such as changing 'Food Processing' to 'Out for Delivery.' Additionally, I implemented and tested a payment method for secure transactions and integrated an email feature for notifications. </p>
            <a href="https://food-restaurant-website-frontend.onrender.com/" target="_blank" rel="noopener noreferrer">click here User Application</a>
            <a href="https://food-restaurant-website-admin.onrender.com/" target="_blank" rel="noopener noreferrer">click here Admin Application</a>
            </div>
          </div> */}
          <div className="project">
            <img src={project6} />
            <div className="layer">
              <h3>Artify</h3>
              <p>In the Artify project, I have implemented two powerful features: background removal from images and text-to-image generation. These functionalities enhance user creativity by allowing them to easily edit images and generate custom visuals from textual descriptions.</p>
              <a href="https://artify-clients.onrender.com/" target="_blank" rel="noopener noreferrer">Click here</a>
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
              <p>A personal portfolio website built using React.js, HTML, and Tailwind CSS to showcase projects and skills. It features a dynamic user interface with smooth animations, a typewriter effect, and responsive design. The website includes sections for about, projects, contact, and social media links, providing an engaging way to highlight professional work and achievements.</p>
            </div>
          </div>
          <div className="project">
            <img src={project2} />
            <div className="layer">
              <h3>Myntra Clone</h3>
             <p>
              Developed a responsive Myntra clone using React.js with key eCommerce features including user login/signup, product browsing, search, filters, cart management, and a smooth checkout process. The platform replicates core Myntra functionality while enhancing user experience through clean UI and seamless navigation. This project highlights my ability to build dynamic, feature-rich eCommerce applications.
            </p>
             </div>
          </div>
{/*           <div className="project">
            <img src={project1} />
            <div className="layer">
              <h3>Portfolio Website</h3>
              <p>A personal portfolio website built using React.js, HTML, and CSS to showcase projects and skills. It features a dynamic user interface with smooth animations, a typewriter effect, and responsive design. The site includes sections for about, projects, contact, and social media links, providing an engaging way to highlight professional work and achievements.</p>
            </div>
          </div> */}
        </div>
        <a href="#" className='btn'>See More</a>
      </div>
    </div>
  )
}

export default Project
