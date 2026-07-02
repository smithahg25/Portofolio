import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >Technical Skills</motion.h2>
            <div className="skills-container">
                <motion.div className="skill-category"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <h3>Programming Languages</h3>
                    <p>Python, JavaScript, TypeScript, SQL, PHP, HTML5, CSS3</p>
                </motion.div>
                
                <motion.div className="skill-category"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                >
                    <h3>Frontend</h3>
                    <p>React.js, Next.js, Vue.js, Tailwind CSS, Framer Motion</p>
                </motion.div>
                
                <motion.div className="skill-category"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <h3>Backend</h3>
                    <p>FastAPI, Node.js, REST APIs, JWT Authentication</p>
                </motion.div>
                
                <motion.div className="skill-category"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                >
                    <h3>AI & LLM Technologies</h3>
                    <p>OpenAI API, Gemini API, Prompt Engineering, Agentic AI, RAG (Retrieval-Augmented Generation), LangGraph, Vector Databases, AI Workflow Automation</p>
                </motion.div>
                
                <motion.div className="skill-category"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <h3>Databases</h3>
                    <p>PostgreSQL, MySQL, MongoDB, ChromaDB</p>
                </motion.div>
                
                <motion.div className="skill-category"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                >
                    <h3>Cloud & DevOps</h3>
                    <p>AWS, Docker, Git, GitHub, GitHub Actions, CI/CD</p>
                </motion.div>
                
                <motion.div className="skill-category"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <h3>Tools & Platforms</h3>
                    <p>VS Code, Postman, Thunder Client, Frappe, Balsamiq</p>
                </motion.div>
                
                <motion.div className="skill-category"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.45 }}
                >
                    <h3>Security & Networking</h3>
                    <p>OWASP Top 10, API Security, Nessus, Burp Suite, Wireshark, Metasploit, TCP/IP, CVE Analysis, Vulnerability Assessment</p>
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;
