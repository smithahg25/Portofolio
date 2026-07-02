import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >Projects</motion.h2>
            <div className="projects-container">
                <motion.div className="project-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ y: -10 }}
                >
                    <div className="project-glow"></div>
                    <h3>AI Product Security Copilot</h3>
                    <ul>
                        <li>Developed an AI-powered, multi-agent platform utilizing LLMs, RAG, vector databases, and FastAPI to streamline the vulnerability management lifecycle for dev and security teams.</li>
                        <li>Automated the analysis of vulnerability scan reports, CVE research, and risk prioritization based on business impact, delivering actionable remediation recommendations.</li>
                        <li>Implemented a RAG-powered chat interface to interact with security reports, automating security documentation and producing executive-ready insights.</li>
                    </ul>
                </motion.div>             
                <motion.div className="project-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ y: -10 }}
                >
                    <div className="project-glow"></div>
                    <h3>Digital Artwork Protection Using Steganography and Blockchain</h3>
                    <ul>
                        <li>Built a secure system using AI-based classification to detect and filter AI-generated images, followed by DCT-based steganography to embed ownership data into verified human-created artworks.</li>
                        <li>Integrated blockchain (Ethereum testnet) and IPFS to immutably store ownership metadata and provide decentralized, tamper-proof access to watermarked digital assets.</li>
                    </ul>
                </motion.div>
                 <motion.div className="project-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ y: -10 }}
                >
                    <div className="project-glow"></div>
                    <h3>Insurance Management System</h3>
                    <ul>
                        <li>Designed and developed a MySQL database with a PHP-based web interface to manage insurance policies, customer data, payments, and claims.</li>
                        <li>Implemented role-based access control (RBAC), form validation, and data filtering with input sanitization and SQL injection prevention for secure information access.</li>
                    </ul>
                </motion.div>
                
            </div>
        </section>
    );
}

export default Projects;
