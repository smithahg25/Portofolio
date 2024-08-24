import React from 'react';
import './Certifications.css'; 

const Certifications = () => {
  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <div className="certification-item">
        <h3>MERN Stack with Bootstrap Framework</h3>
        <p>Institution: TCE</p>
      </div>
      <div className="certification-item">
        <h3>Microsoft Azure: Create an Intelligent Document Processing Solution</h3>
        <p>Institution: Microsoft</p>
      </div>
      <div className="certification-item">
        <h3>Google Cybersecurity Certificate</h3>
        <p>Institution: Google</p>
      </div>
      <div className="certification-item">
        <h3>Infosys Springboard Certifications in Python and Cybersecurity</h3>
        <p>Institution: Infosys</p>
      </div>
    </section>
  );
};

export default Certifications;
