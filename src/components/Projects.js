import React, { useState } from 'react';
import '../styles/projects.css';
import PokeDex from '../assets/PokeDex2.PNG';
import RickAndMorty from '../assets/RickAndMorty2.PNG';
import Ecommerce from '../assets/Ecommerce2.PNG';

const Projects = () => {
    const mockImagenes = [
        <a href="https://chic-kheer-cd2dee.netlify.app/#/">
            <h2>PokeDex</h2>
            <img src={PokeDex} alt="" />
        </a>,
        <a href="https://jolly-banach-a18ff4.netlify.app/">
            <h2>Wiki Rick y Morty</h2>
            <img src={RickAndMorty} alt="" />
        </a>,
        <a href="https://playful-sprinkles-f65f71.netlify.app/#/">
            <h2>Ecommerce</h2>
            <img src={Ecommerce} alt="" />
        </a>,
    ];

    console.log(mockImagenes[0]);

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
            <h2>Proyectos</h2>
            <article className="container-carrusel">
                {mockImagenes.map((imagen, index) => {
                    return (
                        <div
                            className={
                                imagenActual === index ? 'carrusel' : 'active'
                            }
                            key={index}
                        >
                            {imagenActual === index && (
                                <a href={imagen.props.href}>
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
                <a href="https://chic-kheer-cd2dee.netlify.app/#/"></a>
            </article>
        </section>
    );
};

export default Projects;
