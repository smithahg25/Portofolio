import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
    return (
        <section id="education">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >Educational Background</motion.h2>
            <motion.div className="education-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.01 }}
            >
                <h3>SAHYADRI COLLEGE OF ENGINEERING AND MANAGEMENT, KARNATAKA</h3>
                <p className="degree">B.E in Computer Science and Engineering with Specialization in Cybersecurity</p>
                <p className="duration">2021 – 2025</p>
                <p className="cgpa">CGPA: 8.66</p>
            </motion.div>
            <motion.div className="education-item"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.01 }}
            >
                <h3>GOVT SMSD PRE-UNIVERSITY COLLEGE</h3>
                <p className="degree">Pre-University in Science, KARNATAKA</p>
                <p className="duration">2021</p>
                <p className="percentage">Percentage: 90.3</p>
            </motion.div>
            <motion.div className="education-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.01 }}
            >
                <h3>SRI BGS ENGLISH MEDIUM HIGH SCHOOL</h3>
                <p className="degree">Karnataka Secondary Education Board</p>
                <p className="duration">2019</p>
                <p className="percentage">Percentage: 91.2</p>
            </motion.div>
        </section>
    );
};

export default Education;
