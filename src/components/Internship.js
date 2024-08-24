
import React from 'react';
import './Internship.css';

const Internship = () => {
    return (
        <section id="internship">
            <h2>Professional Experience</h2>
            <div className="internship-item">
                <h3>Internship at Niveus Solutions</h3>
                <p className="duration">October 2023 – November 2023</p>
                <ul>
                    <li>Developed user-friendly wireframes for a mobile journaling app and a grievance portal using Balsamiq and ReactJS, and tested functionalities with Postman.</li>
                    <li>Implemented an AI model for complaint classification and built admin features for managing complaints, streamlining the process for users and administrators.</li>
                </ul>
            </div>
        </section>
    );
};

export default Internship;
