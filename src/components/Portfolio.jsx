import React from 'react';
import '../stylesheet/Portfolio.css';
import imgPortfolio from '../img/portfolio/contador.png';

function Portfolio({ num }) {
    
    const portfoliosName = {
        1: 'Contador',
        2: 'Calculator (Not Working)',
        3: 'Web (Not Working)',
    };
    const portfoliosURL = (num) => {
        if (num === '1') {
            return 'http://click-react.vercel.app/';
        } else if (num === '2') {
            return null;
        } else if (num === '3') {
            return null;
        } else {
            return null;
        }
    };
    return (
        <div className="mainContainerPortfolio">
            <a href={portfoliosURL(num)}>
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
