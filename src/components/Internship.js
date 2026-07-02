
import React from 'react';
import { motion } from 'framer-motion';
import './Internship.css';

const Internship = () => {
    return (
        <section id="internship">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >Experience</motion.h2>
            <div className="timeline">
                <motion.div className="internship-item"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="timeline-dot"></div>
                    <h3>Karthika Consulting And Solutions Pvt Ltd - Software Developer</h3>
                    <p className="duration">August 2025 – Present | Bangalore</p>
                    <ul>
                        <li>Hospital Information Management System (HIMS): Owned and architected reusable Vue.js UI modules for a healthcare platform, integrating REST APIs and webhooks to optimize clinical workflows for scalable, multi-user access.</li>
                        <li>Karthika Insurance Project: Built and owned end-to-end React.js frontend for a B2B insurance SaaS platform as sole developer; engineered reusable component libraries and implemented complex business logic for automated policy workflows.</li>
                    </ul>
                </motion.div>
                <motion.div className="internship-item"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="timeline-dot"></div>
                    <h3>Niveus Solutions - Software Developer Intern</h3>
                    <p className="duration">October 9, 2023 – November 4, 2023 | Mangalore</p>
                    <ul>
                        <li>Translated wireframe designs into high-quality React.js code for a grievance portal; validated UI/UX feasibility and secured REST APIs, aligning with OWASP and GDPR standards.</li>
                        <li>Integrated an AI model for automated complaint classification and developed secure admin features for tracking and resolution, implementing access control, data confidentiality, and GDPR/ISO 27001-aligned practices, with API security validated using Postman.</li>
                    </ul>
                </motion.div>
                <motion.div className="internship-item"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="timeline-dot"></div>
                    <h3>Codelab Systems - Full Stack Web Developer Intern</h3>
                    <p className="duration">February 1, 2025 – May 23, 2025 | Mangalore</p>
                    <ul>
                        <li>Developed a full-stack JavaScript application (React.js, Node.js, MongoDB) with responsive, performance-optimized UI components; built reusable front-end libraries using Material-UI and Bootstrap.</li>
                        <li>Designed RESTful APIs with secure validation, applied OWASP guidelines, and enforced API-level access control using Thunder Client and Postman.</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Internship;
