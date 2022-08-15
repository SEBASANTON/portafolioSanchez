import React from 'react';
import '../styles/aboutMe.css';
import imagenPerfil4 from '../assets/FotoBlancoYNegroSinFondo.png';

const AboutMe = () => {
    return (
        <div id="aboutMe">
            <h2>Acerca de mí</h2>
            <div className="aboutMe-info">
                <div className="img-aboutMe">
                    <img src={imagenPerfil4} alt="" />
                </div>
                <div className="txt-aboutMe">
                    <p>
                        Soy <span>Antonio Sanchez</span>, en el año 2018 a la
                        edad de 16 años hice un curso de informática donde
                        gracias a un proyecto de asistencia virtual desarrollada
                        en php con MySQL logre satisfactoriamente el
                        certificado.
                        <br />
                        Posteriormente a finales del año 2021 egrese de la
                        carrera técnica Computación e Informática donde aprendí
                        todas las ramas de la informática, fue ahi donde
                        destaque enormemente en los talleres de programación.
                        <br />A inicio de este año 2022 no lo dude y me inscribi
                        en un programa de Desarrollo Web Full Stack en Academlo
                        para terminar de pulir mis conocimientos, donde después
                        de 8 meses de puro esfuerzo logre concluir
                        satisfactoriamente el programa.
                    </p>
                    <ul>
                        <li>
                            <i className="fa-solid fa-location-dot"></i>
                            Lima - Perú
                        </li>
                        <li>
                            <i className="fa-solid fa-cake-candles"></i>
                            14/10/2001
                        </li>
                        <li>
                            <i className="fa-solid fa-calendar-days"></i>
                            20 años
                        </li>
                        <li>
                            <i className="fa-solid fa-phone"></i>
                            +51 926 613 609
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope"></i>
                            sebasanton07@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
