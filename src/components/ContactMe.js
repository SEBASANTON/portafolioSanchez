import React from 'react';
import '../styles/contactMe.css';
import FormContact from './FormContact';

const ContactMe = () => {
    return (
        <section id="contactMe">
            <h2>Contact Me</h2>
            <form className="form">
                <FormContact />
                <ul className="social-networks">
                    <li>
                        <i className="fa-solid fa-envelope"></i> Email
                    </li>
                    <li>
                        <i className="fa-solid fa-file-lines"></i> CV
                    </li>
                    <li>
                        <i className="fa-brands fa-github"></i> GitHub
                    </li>
                    <li>
                        <i className="fa-brands fa-linkedin-in"></i> LinkedIn
                    </li>
                </ul>
            </form>
        </section>
    );
};

export default ContactMe;
