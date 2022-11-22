import React from 'react';
import '../stylesheet/Card.css';
import imgJs from '../img/languajes/1.png';
import imgR from '../img/languajes/2.png';
import imgNd from '../img/languajes/3.png';
import imgH5 from '../img/languajes/5.png';
import imgCss from '../img/languajes/6.png';
import imgPhp from '../img/languajes/4.png';

const nameLanguaje = {
    1: 'JavaScript',
    2: 'React',
    3: 'NodeJS',
    4: 'Php',
    5: 'Html5',
    6: 'Css3',
};

const imgLanguaje = {
    1: imgJs,
    2: imgR,
    3: imgNd,
    4: imgPhp,
    5: imgH5,
    6: imgCss,
};

function Card({ num }) {
    return (
        <div className="card">
            <div className="tools">
                <div className="circle">
                    <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className="green box"></span>
                </div>
            </div>
            <div className="card__content">
                <img className="img-languajes" src={imgLanguaje[num]} alt="img-languaje" />
                <span className="nameLanguajes">{nameLanguaje[num]}</span>
            </div>
        </div>
    );
}

export default Card;
