import React from 'react';
import { useState } from 'react';
import '../styles/navbar.css';
import logo2 from '../assets/logoSA3.png';

const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <div>
            <div
                className="responsive-menu"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-delay="3000"
            >
                <div className="title-responsive">
                    <a href="#presentation" onClick={() => setIsMenu(false)}>
                        <img src={logo2} alt="" />
                    </a>
                </div>
                <div className="icon-responsive">
                    <button onClick={() => setIsMenu(!isMenu)}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>

            <div
                className={`menu ${isMenu ? 'input' : ''} `}
            >
                <div className="exit-icon">
                    <button onClick={() => setIsMenu(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <ul className="list-menu">
                    <li>
                        <a
                            href="#presentation"
                            onClick={() => setIsMenu(false)}
                        >
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#aboutMe" onClick={() => setIsMenu(false)}>
                            ACERCA DE MI
                        </a>
                    </li>
                    <li>
                        <a href="#abilities" onClick={() => setIsMenu(false)}>
                            MIS HABILIDADES
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={() => setIsMenu(false)}>
                            PROYECTOS
                        </a>
                    </li>
                    <li>
                        <a href="#contactMe" onClick={() => setIsMenu(false)}>
                            CONTACTAME
                        </a>
                    </li>

                    <div className="responsive-icon">
                        <a href="https://www.linkedin.com/in/antonio-sanchez-anton-11b31b196/">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/SEBASANTON">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
