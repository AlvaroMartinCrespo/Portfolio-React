import React from 'react';
import '../stylesheet/Nav.css';

function Nav() {
    return (
        <div className="mainContainer">
            <div className="containerName">
                <span className="blue">[</span>
                <span>dev-AMC</span>
                <span className="blue">]</span>
            </div>
            <div className="containerList">
                <nav>
                    <ul>
                        <li>Cosa 1</li>
                        <li>Cosa 2</li>
                        <li>Cosa 3</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Nav;
