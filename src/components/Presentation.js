import React from 'react';
import '../styles/presentation.css';
import imagenPortada1 from '../assets/ImagenPortada4.png';
import { useState } from 'react';
import FormContact from './FormContact';

const Presentation = () => {
    const [form, setForm] = useState(false);

    return (
        <section id="presentation">
            <img
                src={imagenPortada1}
                alt=""
                data-aos="zoom-out"
                data-aos-duration="1500"
            />
            <div className="titleName">
                <div id="line1"></div>
                <span>Soy Antonio Sanchez</span>
                <div id="line2"></div>
                <div
                    className="titleName-p"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                >
                    <p>
                        Desarrollador Web <br /> Full Stack
                    </p>
                    <p>Fronted | Backend</p>
                </div>
                <button
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    onClick={() => setForm(!form)}
                >
                    Contáctame
                </button>
                <div className="icon-presentation">
                    <a
                        href="https://www.linkedin.com/in/antonio-sanchez-anton-11b31b196/"
                        data-aos="flip-left"
                        data-aos-duration="1500"
                        data-aos-delay="2000"
                    >
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a
                        href="https://wa.me/51926613609"
                        data-aos="flip-right"
                        data-aos-duration="1500"
                        data-aos-delay="2500"
                    >
                        <i className="fa-solid fa-phone"></i>
                    </a>
                    <a
                        href="https://github.com/SEBASANTON"
                        data-aos="flip-left"
                        data-aos-duration="1500"
                        data-aos-delay="3000"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
            <div className={`form-menu ${form ? 'open' : ''}`}>
                <div className="centrar">
                    <div className="exit-icon2">
                        <button onClick={() => setForm(!form)}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <FormContact />
                </div>
            </div>
        </section>
    );
};

export default Presentation;
