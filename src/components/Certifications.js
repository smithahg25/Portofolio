import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css'; 

const Certifications = () => {
  return (
    <section id="certifications">
      <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
      >Certifications</motion.h2>
      <div className="certs-grid">
        <motion.div className="certification-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
        >
          <h3>Networking Basics</h3>
          <p>Institution: Cisco</p>
        </motion.div>
        <motion.div className="certification-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
        >
          <h3>Create an Intelligent Document Processing Solution with Azure AI Document Intelligence</h3>
          <p>Institution: Microsoft Azure</p>
        </motion.div>
        <motion.div className="certification-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
        >
          <h3>Foundations of Cybersecurity, Google AI Essentials</h3>
          <p>Institution: Coursera</p>
        </motion.div>
        <motion.div className="certification-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
        >
          <h3>Python, Cybersecurity Fundamentals and Cybersecurity Foundations certification</h3>
          <p>Institution: Infosys Springboard</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
