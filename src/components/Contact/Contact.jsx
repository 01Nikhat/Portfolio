import React from 'react';
import { motion } from 'framer-motion';
import { EarthCanvas, StarsCanvas } from "./canvas";
import "./Contacts.css";
import { slideIn } from "./utils/motion.js";

const Contact = () => {
  return (
    <div className='outerContainer'>
      {/* StarCanvas in the background */}
      <StarsCanvas />

      {/* Contact Form */}
      <motion.div className="motionContainer" variants={slideIn("left", "tween", 0.2, 1)}>
        <p className='sectionSubText'>Get In Touch</p>
        <h3 className='sectionHeadText'>Contact.</h3>
        <form className='form'>
          <label className='label'>
            <span className='tag'>Your Name</span>
            <input
              type='text'
              name='name'
              placeholder="What's your good name?"
              className='inputName'
            />
          </label>
          <label className='label'>
            <span className='tag'>Your Email</span>
            <input
              type='email'
              name='email'
              placeholder="What's your web address?"
              className='inputEmail'
            />
          </label>
          <label className='label'>
            <span className='tag'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              placeholder='What do you want to say?'
              className='inputMessage'
            />
          </label>
          <button type='submit' className='btn'>Send</button>
        </form>
      </motion.div>

      {/* EarthCanvas */}
      <motion.div className="earthStyle" variants={slideIn("right", "tween", 0.2, 1)}>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Contact;
