import React from 'react';
import "./Nav.scss";
import DateTime from './DateTime';

const Nav = () => {
  return (
    <nav>
        <div className="left-section">
            <div className="apple-icon">
                <img src="/Nav_icons/apple.svg" alt="Apple Icon" title="Mac OS" />
            </div>

            <div className="nav-items">
                <p>Shreyas Patil</p>
            </div>
            <div className="nav-items">
                <p>Files</p>
            </div>
            <div className="nav-items">
                <p>Window</p>
            </div>
            <div className="nav-items">
                <p>Terminal</p>
            </div>

        </div>

        <div className="right-section">
            <div className="wifi-icon">
                <img src="./Nav_icons/wifi.svg" alt="Wifi" />
            </div>
            <DateTime />
        </div>
    </nav>
  )
}

export default Nav
