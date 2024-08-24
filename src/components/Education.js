
import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section id="education">
            <h2>Educational Background</h2>
            <div className="education-item">
                <h3>Sahyadri College of Engineering and Management</h3>
                <p className="degree">Bachelor’s in Computer Science and Engineering, Specialization in Cybersecurity</p>
                <p className="duration">2021 – 2025</p>
                <p className="cgpa">CGPA: 8.5</p>
            </div>
            <div className="education-item">
                <h3>Govt SMSD Pre-University College</h3>
                <p className="degree">Pre-University Science</p>
                <p className="duration">2019 – 2021</p>
                <p className="percentage">Percentage: 90.3%</p>
            </div>
            <div className="education-item">
                <h3>Sri BGS English Medium High School</h3>
                <p className="degree">High School</p>
                <p className="duration">2017 – 2019</p>
                <p className="percentage">Percentage: 91.2%</p>
            </div>
        </section>
    );
};

export default Education;
