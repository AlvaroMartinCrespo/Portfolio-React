import React from 'react';
import '../stylesheet/Contact.css';

function Contact() {
    return (
        <div className="mainContainerContact">
            <div className="containerContact">
                <p>alvaro.martin.crespo.00@gmail.com</p>
                <div className="containerButtons">
                    <a
                        className="btn"
                        href="https://github.com/AlvaroMartinCrespo"
                    >
                        GitHub
                    </a>
                    <a
                        className="btn"
                        href="https://www.linkedin.com/in/alvaro-martin-crespo-bb9aa5246/"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
