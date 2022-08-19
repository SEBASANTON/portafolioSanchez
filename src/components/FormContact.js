import React from 'react';
import '../styles/formContact.css';
const FormContact = () => {
    return (
        <form
            className="form-container"
            data-aos="zoom-in"
            data-aos-duration="2000"
            name="contact"
            method="post"
        >
            <input type="hidden" name="form-name" value="contact" />
            <input
                type="text"
                name="name"
                className="form_input"
                placeholder=" Nombre"
            />
            <input
                type="email"
                name="email"
                className="form_input"
                placeholder=" Email"
            />
            <textarea
                name="message"
                className="form_input form_input--message"
                rows="5"
                placeholder=" Mensaje"
            ></textarea>
            <input type="submit" value="ENVIAR" className="form_cta" />
        </form>
    );
};

export default FormContact;
