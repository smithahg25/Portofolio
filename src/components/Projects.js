
import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                <div className="project-card">
                    <h3>Digital Art Copyright Protection Using Steganography and Blockchain</h3>
                    <p>Developed using React.js, Node.js, and Python. The project utilizes steganography to embed copyright information and blockchain for immutable proof of ownership.</p>
                </div>
                <div className="project-card">
                    <h3>Cattle Disease Detection Using Image Recognition</h3>
                    <p>Created an automated system using image recognition and chatbot technologies for diagnosing cattle diseases. Implemented with FastAPI and TensorFlow.</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
