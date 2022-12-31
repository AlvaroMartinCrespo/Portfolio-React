import React from 'react';
import '../stylesheet/Portfolio.css';
import imgContador from '../img/portfolio/contador.png';
import imgCalculator from '../img/portfolio/calculator.png';
import imgTask from '../img/portfolio/task.png';

function Portfolio({ num }) {
  const selectImg = (num) => {
    if (num === '1') {
      return imgContador;
    } else if (num === '2') {
      return imgCalculator;
    } else if (num === '3') {
      return imgTask;
    }
  };

  const portfoliosName = {
    1: 'Contador',
    2: 'Calculator',
    3: 'Task',
  };
  const portfoliosURL = (num) => {
    if (num === '1') {
      return 'http://click-react.vercel.app/';
    } else if (num === '2') {
      return 'https://calculator-react-4z2y8vsxq-alvaromartincrespo.vercel.app/';
    } else if (num === '3') {
      return 'https://app-tareas-react-peach.vercel.app/';
    } else {
      return null;
    }
  };
  return (
    <div className="mainContainerPortfolio">
      <a href={portfoliosURL(num)} target="_blank">
        <img
          className="imgPortfolio"
          src={selectImg(num)}
          alt="img-portfolio2"
        />
      </a>
      <span className="namePortfolio">{portfoliosName[num]}</span>
    </div>
  );
}

export default Portfolio;
