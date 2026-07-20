// import React from 'react';
// import { motion } from 'framer-motion';
// import { EarthCanvas, StarsCanvas } from "./canvas";
// import "./Contacts.css";
// import { slideIn } from "./utils/motion.js";
// import  { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
  
//     const form = useRef();
  
//     const sendEmail = (e) => {
//       e.preventDefault();
  
//       emailjs
//         .sendForm('service_af7q95a', 'template_‎6hzz2zf', form.current, {
//           publicKey: 'M8DHKDqiR1KEG-cb3',
//         })
//         .then(
//           () => {
//             console.log('SUCCESS!');
//           },
//           (error) => {
//             console.log('FAILED...', error.text);
//           },
//         );
//     };
  
  
//   return (
//     <div className='outerContainer'>
//       {/* StarCanvas in the background */}
//       <StarsCanvas />

//       {/* Contact Form */}
//       <motion.div className="motionContainer" variants={slideIn("left", "tween", 0.2, 1)}>
        
//         <h3 className='sectionHeadText'>Contact Me</h3>
//         <form className='form' ref={form} onSubmit={sendEmail}>
//           <label className='label'>
//             <span className='tag'>Your Name</span>
//             <input
//               type='text'
//               name='from_name'
//               placeholder="What's your good name?"
//               className='inputName'
//             />
//           </label>
//           <label className='label'>
//             <span className='tag'>Your Email</span>
//             <input
//               type='email'
//               name='from_email'
//               placeholder="What's your web address?"
//               className='inputEmail'
//             />
//           </label>
//           <label className='label'>
//             <span className='tag'>Your Message</span>
//             <textarea
//               rows={7}
//               name='message'
//               placeholder='What do you want to say?'
//               className='inputMessage'
//             />
//           </label>
//           <button type='submit' value="Send" className='btn'>Send</button>
//         </form>
//       </motion.div>

//       {/* EarthCanvas */}
//       <motion.div className="earthStyle" variants={slideIn("right", "tween", 0.2, 1)}>
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default Contact;


import React from 'react';
import { motion } from 'framer-motion';
import { EarthCanvas, StarsCanvas } from "./canvas";
import "./Contacts.css";
import { slideIn } from "./utils/motion.js";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init('M8DHKDqiR1KEG-cb3');

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');

    emailjs
     .sendForm('service_af7q95a', 'template_w7yabjn', form.current)
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setSuccess(true);
          form.current.reset();
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(error.text);
          setTimeout(() => setError(''), 5000);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className='outerContainer'>
      <StarsCanvas />
      
      <motion.div 
        className="motionContainer" 
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
      >
        <h3 className='sectionHeadText'>Contact Me</h3>
        
        {success && <p style={{color: '#10b981', marginBottom: '20px', fontWeight: '600'}}>✓ Message sent successfully!</p>}
        {error && <p style={{color: '#ef4444', marginBottom: '20px', fontWeight: '600'}}>❌ Error: {error}</p>}

        <form className='form' ref={form} onSubmit={sendEmail}>
          <label className='label'>
            <span className='tag'>Your Name</span>
            <input
              type='text'
              name='from_name'
              placeholder="What's your good name?"
              className='inputName'
              required
            />
          </label>

          <label className='label'>
            <span className='tag'>Your Email</span>
            <input
              type='email'
              name='from_email'
              placeholder="What's your web address?"
              className='inputEmail'
              required
            />
          </label>

          <label className='label'>
            <span className='tag'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              placeholder='What do you want to say?'
              className='inputMessage'
              required
            />
          </label>

          <button 
            type='submit' 
            value="Send" 
            className='btn'
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div 
        className="earthStyle" 
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Contact;
