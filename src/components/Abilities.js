import React from 'react';
import '../styles/abilities.css';

const Abilities = () => {
    return (
        <section id="abilities">
            <h2 data-aos="fade-left" data-aos-duration="1500">
                Mis Habilidades
            </h2>
            <div className="skills-responsive">
                <article
                    className="skills-soft"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <h2>Habilidades blandas</h2>
                    <p>Aprendizaje rápido</p>
                    <div className="progress-bar">
                        <div className="ninety">
                            <div className="eighty-animate"></div>
                        </div>
                    </div>
                    <p>Creatividad e innovación</p>
                    <div className="progress-bar">
                        <div className="eighty">
                            <div className="eighty-animate"></div>
                        </div>
                    </div>
                    <p>Trabajo en equipo</p>
                    <div className="progress-bar">
                        <div className="eighty-five">
                            <div className="eighty-animate"></div>
                        </div>
                    </div>
                </article>
                <article
                    className="skills-professional"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <h2>Habilidades Profesionales</h2>
                    <article className="lenguages1">
                        <div className="html">
                            <i className="fa-brands fa-html5"></i>
                            <p>HTML</p>
                        </div>
                        <div className="css">
                            <i className="fa-brands fa-css3-alt"></i>
                            <p>CSS</p>
                        </div>
                        <div className="git">
                            <i className="fa-brands fa-git-alt"></i>
                            <p>GIT</p>
                        </div>
                    </article>
                    <article className="lenguages2">
                        <div className="js">
                            <i className="fa-brands fa-js"></i>
                            <p>JavaScript</p>
                        </div>
                        <div className="react">
                            <i className="fa-brands fa-react"></i>
                            <p>React JS</p>
                        </div>
                        <div className="node">
                            <i className="fa-brands fa-node-js"></i>
                            <p>Node JS</p>
                        </div>
                    </article>
                </article>
            </div>
        </section>
    );
};

export default Abilities;
