import React from 'react';
import '../stylesheet/Nav.css';

const code1 = '<';
const code2 = ' />';
const name = 'AMC';

function Nav() {
    let urlKnowledge = '#knowledge';
    let elementKnowledge = <a href={urlKnowledge}>Knowledge</a>;
    let urlPortfolio = '#portfolio';
    let elementPortfolio = <a href={urlPortfolio}>Portfolio</a>;
    let urlContact = '#contact';
    let elementContact = <a href={urlContact}>Contact</a>;
    return (
        <div className="mainContainer">
            <div className="containerName">
                <span className="blueSpan">{code1}</span>
                <span>{name}</span>
                <span className="greenSpan">{code2}</span>
            </div>
            <div className="containerList">
                <nav>
                    <ul>
                        <li>{elementKnowledge}</li>
                        <li>{elementPortfolio}</li>
                        <li>{elementContact}</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Nav;
