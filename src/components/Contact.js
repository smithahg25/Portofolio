import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <p>Interested in working together? Let's talk!</p>
            <div className="contact-links">
                <a href="mailto:hgsmitha2004@gmail.com">Email Me</a>
                <a href="https://www.linkedin.com/in/smitha-hg-455148229/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/smithahg25" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </section>
    );
}

export default Contact;
