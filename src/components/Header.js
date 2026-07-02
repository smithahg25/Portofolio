import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
    return (
        <>
            <header className="main-header">
                <nav className="main-nav">
                    <h1 className="logo">Smitha HG</h1>
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#internship">Experience</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#certifications">Certifications</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <div className="hero" id="hero">
                <motion.div 
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="hero-badge">Available for Work</div>
                    <h2 className="hero-title">
                        <TypeAnimation
                            sequence={[
                                'Software Developer', 1000,
                                'AI Engineer', 1000,
                                'Full Stack Developer', 1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="typing-text"
                        />
                    </h2>
                    <p className="hero-subtitle">Creating Beautiful, Secure & Functional Web Experiences.</p>
                    <div className="hero-actions">
                        <a href="#projects" className="cta-button">View Projects</a>
                        <a href="#contact" className="cta-button outline">Contact Me</a>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default Header;
