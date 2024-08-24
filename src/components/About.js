import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <img src={`${process.env.PUBLIC_URL}/profile.jpeg`} alt="Profile" className="profile-image" />
            <p>
                I'm Smitha HG, a passionate frontend developer specializing in creating stunning, user-friendly web interfaces. 
                Currently pursuing a Bachelor’s degree in Computer Science and Engineering with a focus on Cybersecurity, 
                I combine technical expertise with creativity to build impactful digital solutions.
            </p>
        </section>
    );
};

export default About;
