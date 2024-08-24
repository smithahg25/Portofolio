
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <h1>Smitha HG</h1>
                <ul>
                    <li><Link to="/">About Me</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/internship">Internship</Link></li>
                    <li><Link to="/Certifications">Certifications</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                </ul>
            </nav>
            <div className="hero">
                <h2>Welcome to My Portfolio</h2>
                <p>Frontend Developer | Passionate about Creating Beautiful and Functional Web Experiences</p>
                <Link to="/contact" className="cta">Let's Connect</Link>
            </div>
        </header>
    );
}

export default Header;
