import React from 'react';
import '../styles/contactMe.css';
import FormContact from './FormContact';
import CV from '../assets/CVSanchez.pdf';

const ContactMe = () => {
    return (
        <section id="contactMe" >
            <h2 data-aos="fade-left" data-aos-duration="1500">
                Contact Me
            </h2>
            <form className="form" data-aos="zoom-in" data-aos-duration="1500">
                <FormContact />
                <ul
                    className="social-networks"
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                >
                    <li>
                        <a href="mailto:sebasanton07@gmail.com">
                            <i className="fa-solid fa-envelope"></i> Email
                        </a>
                    </li>
                    <li>
                        <a download="CV-AntonioSanchez" href={CV}>
                            <i className="fa-solid fa-file-lines"></i> CV
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/SEBASANTON">
                            <i className="fa-brands fa-github"></i> GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/antonio-sanchez-anton-11b31b196/">
                            <i className="fa-brands fa-linkedin-in"></i>{' '}
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </form>
        </section>
    );
};

export default ContactMe;
