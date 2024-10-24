// Modal.jsx
import React from 'react';
import './modal.css'; // Add styles for the modal
import 'boxicons';
import Resume from "../../images/Resume.pdf";

const Modal = ({ onClose, resume }) => {
  
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <box-icon name='x-circle' color="#0ef"></box-icon>
        </button>
        <iframe 
          src={resume} 
          title="Resume" 
          className="resume-iframe" 
          frameBorder="0"
        />
       
      </div>
    </div>
  );
};


export default Modal;
