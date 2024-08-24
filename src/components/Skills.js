
import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                <div className="skill-item">
                    Python
                    <div className="star-rating">★★★★★</div>
                </div>
                <div className="skill-item">
                    HTML
                    <div className="star-rating">★★★★★</div>
                </div>
                <div className="skill-item">
                    CSS
                    <div className="star-rating">★★★★★</div>
                </div>
                <div className="skill-item">
                    React
                    <div className="star-rating">★★★★☆</div>
                </div>
                <div className="skill-item">
                    Node.js
                    <div className="star-rating">★★★★☆</div>
                </div>
                <div className="skill-item">
                    MySQL
                    <div className="star-rating">★★★☆☆</div>
                </div>
                <div className="skill-item">
                    MongoDB
                    <div className="star-rating">★★★★☆</div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
