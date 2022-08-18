import React from 'react';
import '../styles/presentation.css';
import imagenPortada1 from '../assets/ImagenPortada1.png';
import { useState } from 'react';
import FormContact from './FormContact';

const Presentation = () => {
    const [form, setForm] = useState(false);

    return (
        <section id="presentation">
            <img src={imagenPortada1} alt="" />
            <div className="titleName">
                <div id="line1"></div>
                <span>Soy Antonio Sanchez</span>
                <div id="line2"></div>
                <div className="titleName-p">
                    <p>
                        Desarrollador Web <br /> Full Stack
                    </p>
                    <p>Fronted | Backend</p>
                </div>
                <button onClick={() => setForm(!form)}>Contáctame</button>
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
