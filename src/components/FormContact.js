import React from 'react';
import '../styles/formContact.css';
const FormContact = () => {
    return (
        <form
            className="form-container"
            data-aos="zoom-in"
            data-aos-duration="2000"
            name="formulario-contacto"
            data-netlify="true"
        >
            <input type="text" className="form_input" placeholder=" Nombre" />
            <input type="email" className="form_input" placeholder=" Email" />
            <textarea
                className="form_input form_input--message"
                rows="5"
                placeholder=" Mensaje"
            ></textarea>
            <input type="submit" value="ENVIAR" className="form_cta" />
        </form>
    );
};

export default FormContact;
