import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <motion.div className="contact-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2>Let's Build Something Amazing Together</h2>
                <p>I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                <div className="contact-links">
                    <motion.a href="mailto:hgsmitha2004@gmail.com" whileHover={{ y: -5 }} className="social-btn mail">
                        <FaEnvelope /> Email Me
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/smitha-hg-455148229/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }} className="social-btn linkedin">
                        <FaLinkedin /> LinkedIn
                    </motion.a>
                    <motion.a href="https://github.com/smithahg25" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }} className="social-btn github">
                        <FaGithub /> GitHub
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}

export default Contact;
