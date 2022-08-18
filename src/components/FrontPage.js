import React from 'react';
import fondo1 from '../assets/fondo1.svg';
import '../styles/frontPage.css';
import fondo2 from '../assets/fondo2.svg';

const FrontPage = () => {
    return (
        <div id="frontPage">
            <div id="circulo">
                <div id="circulo2">
                    <div id="circulo3">
                        <div id="circulo4">
                        </div>
                    </div>
                </div>
            </div>
            <img src={fondo2} className="fondo1" alt="" />
            <img src={fondo2} className="fondo2" alt="" />
            <img src={fondo1} className="fondo3" alt="" />
            <img src={fondo1} className="fondo4" alt="" />
            <img src={fondo1} className="fondo5" alt="" />
            <div className='portafolio'>
                <p>PORTAFOLIO</p>
            </div>

            <div className="responsive-portada">
                <div className="name-portada">
                    <h1>ANTONIO SANCHEZ</h1>
                    <div id="raya1"></div>
                    <div id="raya2"></div>
                    <p>Full stack web developer</p>
                </div>
                <div className="lenguajes">
                    <span className="logo1">
                        <i className="fa-brands fa-html5"></i>
                    </span>
                    <span className="logo2">
                        <i className="fa-brands fa-css3-alt"></i>
                    </span>
                    <br />
                    <span className="logo3">
                        <i className="fa-brands fa-js"></i>
                    </span>
                    <span className="logo4">
                        <i className="fa-brands fa-react"></i>
                    </span>
                    <br />
                    <span className="logo5">
                        <i className="fa-brands fa-node-js"></i>
                    </span>
                    <span className="logo6">
                        <i className="fa-brands fa-git-alt"></i>
                    </span>
                </div>
                {/* <div className='contactame'>
                    <img src={scrollDown} alt="" />
                    <p><i class="fa-solid fa-id-badge"></i></p>
                    <br />
                    <p>Contactame</p>
                </div> */}

            </div>
            {/* <div className='ssss'>
                <p>asdasdadasdasdasd</p>
            </div> */}
        </div>
    );
};

export default FrontPage;
