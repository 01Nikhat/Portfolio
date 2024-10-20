import React from 'react';
import "./intro.css";
import Video from '../../images/video.mp4';
import { Link } from "react-scroll";
import Resume from "../../images/cv.png";
import Typewriter from 'typewriter-effect';

const Intro = () => {
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
            <span className="hello">Hello </span>
            <span className="introText">
              I am <span className="introName">
                <Typewriter 
                  options={{
                    strings: [
                      'Nikhat Parvin',
                      'a Frontend Developer',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 30,
                    delay: 75,
                  }} 
                />
              </span>
            </span>
            
            <p className="intrDescription">
              I am a skilled web Developer with Experience in creating visually appealing and user-friendly websites.
            </p>
            <Link>
              <a className='resumeButton'><span>RESUME</span> </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
