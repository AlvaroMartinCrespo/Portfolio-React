import React from 'react';
import Nav from './Nav.jsx';
import Presentation from './Presentation.jsx';
import '../stylesheet/Page.css';
import Card from './Card.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';

function Page() {
    const descriptionProp = 'Web application developer and designer';
    const skillsProp = 'Passion for programming. Teamwork. Creative. Willing to face challenges.';

    return (
        <div>
            <div className="containerNav">
                <Nav />
            </div>

            <div className="containerPresentation">
                <Presentation
                    name="Alvaro Martin Crespo"
                    job="Front-End Developer"
                    imagen="1"
                    country="España"
                    description={descriptionProp}
                    skills={skillsProp}
                />
            </div>
            <h1>Skills Languajes</h1>
            <div className="containerSeparator">
                <hr className="separator" />
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
                    <h1 className="darkBackground">Portfolio</h1>
                    <hr className="separator" />
                </div>

                <div className="containerPortfolio ">
                    <Portfolio num="1" />
                    <Portfolio num="2" />
                    <Portfolio num="3" />
                </div>
            </div>

            <h1>Contact</h1>
            <div className="containerSeparator">
                <hr className="separator" />
            </div>

            <div className="contact">
                <Contact />
            </div>
        </div>
    );
}

export default Page;
