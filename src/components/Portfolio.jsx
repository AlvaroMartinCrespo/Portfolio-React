import React from 'react';
import '../stylesheet/Portfolio.css';
import imgPortfolio from '../img/portfolio/contador.png';

function Portfolio({ num }) {
    const portfoliosName = {
        1: 'Contador',
        2: 'Calculator',
        3: 'Web',
    };
    return (
        <div className="mainContainerPortfolio">
            <a href="http://">
                <img
                    className="imgPortfolio"
                    src={imgPortfolio}
                    alt="img-portfolio2"
                />
            </a>
            <span className="namePortfolio">{portfoliosName[num]}</span>
        </div>
    );
}

export default Portfolio;
