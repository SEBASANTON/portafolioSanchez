import React, { useState } from 'react';
import '../styles/projects.css';
import PokeDex from '../assets/PokeDex2.PNG';
import RickAndMorty from '../assets/RickAndMorty2.PNG';
import Ecommerce from '../assets/Ecommerce2.PNG';
import WeatherApp from '../assets/WeatherApp.PNG';

const Projects = () => {
    const mockImagenes = [
        <a href="https://chic-kheer-cd2dee.netlify.app/#/">
            <h2>PokeDex</h2>
            <img src={PokeDex} alt="" />
            <p>
                Ingresa tu nombre y consulta la información de tu Pokémon
                favorito.
            </p>
        </a>,
        <a href="https://jolly-banach-a18ff4.netlify.app/">
            <h2>Wiki Rick y Morty</h2>
            <img src={RickAndMorty} alt="" />
            <p>Busca todos los mundos de Rick & Morty por su ID.</p>
        </a>,
        <a href="https://playful-sprinkles-f65f71.netlify.app/#/">
            <h2>E-commerce</h2>
            <img src={Ecommerce} alt="" />
            <p>Simulador de sitio web para comprar productos tecnologicos.</p>
        </a>,
        <a href="https://thirsty-galileo-03d818.netlify.app/">
            <h2>Weather App</h2>
            <img src={WeatherApp} alt="" />
            <p>
                Activa tu ubicación para saber la información de tu clima
                actual.
            </p>
        </a>,
    ];

    console.log(mockImagenes[2]);

    const [imagenActual, setImagenActual] = useState(0);

    const cantidad = mockImagenes?.length;

    if (!Array.isArray(mockImagenes) || cantidad === 0) return;

    const siguienteImagen = () => {
        setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
    };

    const anteriorImagen = () => {
        setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
    };

    return (
        <section id="projects">
            <h2 data-aos="fade-left" data-aos-duration="1500">
                Proyectos
            </h2>
            <article
                className="container-carrusel"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="600"
                data-aos-offset="0"
            >
                {mockImagenes.map((imagen, index) => {
                    return (
                        <div
                            className={
                                imagenActual === index ? 'carrusel' : 'active'
                            }
                            key={index}
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                        >
                            {imagenActual === index && (
                                <a
                                    href={imagen.props.href}
                                    data-aos="flip-down"
                                >
                                    <h2>
                                        {
                                            imagen?.props?.children[0]?.props
                                                ?.children
                                        }
                                    </h2>
                                    <img
                                        key={index}
                                        src={
                                            imagen?.props?.children[1]?.props
                                                ?.src
                                        }
                                        alt="imagen"
                                    />
                                    <p>
                                        {
                                            imagen?.props?.children[2]?.props
                                                ?.children
                                        }
                                    </p>
                                </a>
                            )}
                        </div>
                    );
                })}
                <button onClick={anteriorImagen}>
                    <i className="fa-solid fa-angles-left"></i>
                </button>
                <button onClick={siguienteImagen}>
                    <i className="fa-solid fa-angles-right"></i>
                </button>
            </article>
            <article
                className="container-desktop"
                data-aos="zoom-in"
                data-aos-duration="1500"
            >
                {mockImagenes.map(imagen => {
                    return (
                        <a
                            key={imagen.props.href}
                            href={imagen.props.href}
                            data-aos="flip-down"
                            data-aos-duration="2000"
                        >
                            <img
                                src={imagen?.props?.children[1]?.props?.src}
                                alt="imagen"
                            />
                            <div>
                                <h2>
                                    {
                                        imagen?.props?.children[0]?.props
                                            ?.children
                                    }
                                </h2>
                                <p>
                                    {
                                        imagen?.props?.children[2]?.props
                                            ?.children
                                    }
                                </p>
                            </div>
                        </a>
                    );
                })}
            </article>
        </section>
    );
};

export default Projects;
