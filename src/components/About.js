import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <h2>About Me</h2>
                <div className="profile-container">
                    <img src={`${process.env.PUBLIC_URL}/profile.jpeg`} alt="Profile" className="profile-image" />
                    <div className="profile-glow"></div>
                </div>
                <p>
                    Knowledgeable in cybersecurity, with skills in security principles, risk management, privacy, and data protection. 
                    Proficient in full-stack development using React.js, Node.js, MongoDB, and SQL, building secure and scalable web applications. 
                    Hands-on experience with the Frappe Framework and Vue.js for developing healthcare systems and interactive user interfaces. 
                    Strong understanding of computer networking, including TCP/IP, OSI model, routing, switching, and troubleshooting.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
