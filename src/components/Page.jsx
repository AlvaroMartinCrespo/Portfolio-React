import React from 'react';
import Nav from './Nav.jsx';
import Presentation from './Presentation.jsx';
import '../stylesheet/Page.css';
import Card from './Card.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';
import Player from './Video.jsx';
// import Arrow from './BotonUp.jsx';

function Page() {
    const urlUp = '#';
    const descriptionProp = 'Web application developer and designer';
    const skillsProp =
        'Passion for programming. Teamwork. Creative. Willing to face challenges.';
    const name = 'Alvaro Martin Crespo';
    const job = 'Front-End Developer';
    const img = 1;

    return (
        <div>
            <a href={urlUp} className="btn-flotante">
                UP
            </a>

            <div className="containerNav">
                <Nav />
            </div>

            <div className="containerPresentation">
                <div className="containerVideo">
                    <Player />
                </div>
                <Presentation
                    name={name}
                    job={job}
                    imagen={img}
                    description={descriptionProp}
                    skills={skillsProp}
                />
            </div>

            <h1 id="knowledge">Knowledge</h1>

            <div className="containerSeparator">
                <hr className="separator" />
                <span class="cita">
                    <i>
                        "Eager to become a professional with these languages
                        ​​and learn more languages."
                    </i>
                </span>
            </div>

            <div className="mainContainerCards">
                <div className="containerCards">
                    <Card num="1" />
                    <Card num="2" />
                    <Card num="3" />
                    <Card num="4" />
                    <Card num="5" />
                    <Card num="6" />
                </div>
            </div>

            <div className="portfolio">
                <div className="containerSeparator darkBackground padding">
                    <h1 id="portfolio" className="darkBackground">
                        Portfolio
                    </h1>
                    <hr className="separator" />
                    <span class="cita">
                        <i className="darkBackground">
                            "Some of my projects in React, HTML and CSS"
                        </i>
                    </span>
                </div>

                <div className="containerPortfolio ">
                    <Portfolio num="1" />
                    <Portfolio num="2" />
                    <Portfolio num="3" />
                </div>
            </div>

            <h1>Contact</h1>
            <div id="contact" className="containerSeparator">
                <hr className="separator" />
            </div>

            <div className="contact">
                <Contact />
            </div>
        </div>
    );
}

export default Page;
