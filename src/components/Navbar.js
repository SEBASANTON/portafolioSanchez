import React from 'react';
import { useState } from 'react';
import '../styles/navbar.css';
import logo2 from '../assets/Logo2.jpg';

const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <div>
            <div className="responsive-menu">
                <div className="title-responsive">
                    <img src={logo2} alt="" />
                </div>
                <div className="icon-responsive">
                    <button onClick={() => setIsMenu(!isMenu)}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>

            <div className={`menu ${isMenu ? 'input' : ''} `}>
                <div className="exit-icon">
                    <button onClick={() => setIsMenu(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <ul className="list-menu">
                    <li>
                        <a href="#frontPage" onClick={() => setIsMenu(false)}>
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
                        <a href="">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <i className="fa-brands fa-github"></i>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
