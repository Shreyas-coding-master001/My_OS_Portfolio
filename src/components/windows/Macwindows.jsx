import React, { useState } from 'react';
import { Rnd } from "react-rnd";
import "./Macwindows.scss";

const Macwindows = ({ children }) => {
    const [isOpen, setIsOpen] = useState({
        red: false,
        yellow: false,
        green: false,
    });

  return (
    <Rnd
      default={{
        x: 200,
        y: 80,
        top: "50%",
        left: "50%",
        width: 400,
        height: 300,
      }}

    >
        <div className="window">
            <div className="nav">
                <div className="dot red"
                    onMouseEnter={() => setIsOpen(prev => ({ ...prev, red: true }))}
                    onMouseLeave={() => setIsOpen(prev => ({ ...prev, red: false }))}

                    onClick = { () => console.log("closed") }
                > {isOpen.red? 'x' : ''} </div>
                <div className="dot yellow"
                    onMouseEnter={() => setIsOpen(prev => ({ ...prev, yellow: true }))}
                    onMouseLeave={() => setIsOpen(prev => ({ ...prev, yellow: false }))}
                > {isOpen.yellow? '-' : ''} </div>
                <div className="dot green"
                    onMouseEnter={() => setIsOpen(prev => ({ ...prev, green: true }))}
                    onMouseLeave={() => setIsOpen(prev => ({ ...prev, green: false }))}
                > {isOpen.green? '□' : ''} </div>
            </div>

            <div className="main">
                { children }
            </div>
        </div>
    </Rnd>
  )
}

export default Macwindows;
