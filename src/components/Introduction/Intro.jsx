import React, { useState, useEffect } from 'react';
import "./intro.css";
import Video from '../../images/video.mp4';
import Resume from "../../images/Nikhat_Parvin_Resume.pdf";
import Typewriter from 'typewriter-effect';
import 'boxicons';
import Modal from "../modal/modal.jsx"; // Import the Modal component
import {motion} from "framer-motion";

const Intro = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to check for mobile

  const handleResumeClick = () => {
    if (!isMobile) {
      setModalOpen(true); // Open modal if not on mobile
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close modal
  };

  // Check window size and set mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Listen for resize

    return () => window.removeEventListener('resize', handleResize); // Clean up
  }, []);

  return (
    <div>
      <section id="intro">
        <div className="video-container">
          <div className="video-shadow"></div>
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
        </div>

        <div className="content-container">
          <div className="leftContainer">
          <motion.div 
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:-100}}
              transition={{duration:0.5}}
              className="leftSlide">
            <span className="hello">Hello, I’m </span>
            </motion.div>
          <span className="introText">
          <span className="introName">Nikhat Parvin</span>
          <br />
          <span className="introRole">
            <Typewriter 
              options={{
                strings: [
                  'Software Developer',
                  'React Developer',
                  'Frontend Developer',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 75,
              }} 
            />
          </span>
        </span>
            <motion.div
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:0.5}}
              className="rightSlider">
            <p className="intrDescription">
             Building scalable and high-performance web applications using modern technologies.
            </p>
            </motion.div>
            <div className="social">
             <a href="https://github.com/01Nikhat" target="_blank" rel="noreferrer"><box-icon type='logo' name='github'></box-icon></a>
              <a href="https://www.linkedin.com/in/nikhat-parvin/" target="_blank" rel="noreferrer"><box-icon type='logo' name='linkedin-square'></box-icon></a>
              
            </div>
            <button className='resumeButton' onClick={handleResumeClick}>
              <span>View Resume</span>
            </button>
            {isMobile && (
              <a href={Resume} className='resumeButton'>
                <span>Download Resume</span>
              </a>
            )}
          </div>
        </div>
      </section>
      
      {modalOpen && <Modal onClose={handleCloseModal} resume={Resume} />}
     
    </div>
  );
}

export default Intro;
