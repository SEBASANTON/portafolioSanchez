import React from 'react';
import '../styles/formContact.css';
const FormContact = () => {
    return (
        <div className="form-container">
            <input
                type="text"
                className="form_input"
                placeholder=" Nombre"
            />
            <input type="email" className="form_input" placeholder=" Email" />
            <textarea
                className="form_input form_input--message"
                rows="5"
                placeholder=" Mensaje"
            ></textarea>
            <input type="submit" value="Enviar" className="form_cta" />
        </div>
    );
};

export default FormContact;
