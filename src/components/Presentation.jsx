import React from 'react';
import '../stylesheet/Presentation.css';
import imgPortfolio from '../img/imgState/img2.jpg';

function Presentation({ name, description, skills }) {
    return (
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" src={imgPortfolio} alt="portfio-img" />
            <div className="contenedor-texto">
                <p className="nombre-testimonio">
                    <strong>{name}</strong>
                </p>
                <p className="texto-testimonio">"{description}"</p>
                <p className="texto-testimonio">"{skills}"</p>
            </div>
        </div>
    );
}

export default Presentation;
