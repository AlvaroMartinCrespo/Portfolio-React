import React from 'react';
import '../stylesheet/Nav.css';
import imgLogo from '../img/utilities/code2.png';

const code1 = '<';
const code2 = '>';
const name = 'AMC';

function Nav() {
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
                        <li>Knowledge</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Nav;
