import React, { useState } from 'react';
import { Rnd } from "react-rnd";
import "./Macwindows.scss";

const Macwindows = ({ children, width="55vw", height="70vh" }) => {

    const [zIndex, setIndex] = useState(1);

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
        width: width,
        height: height,
      }}
      style={{ zIndex: zIndex !== 1 ? zIndex : 1 }}
    >
        <div className="window"
            onClick={() => {
                setIndex(99);
            }}
            onMouseLeave={() => setIndex(5)}
         >
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

                <div className="full-name">
                    <p>Shreyas Patil - zsh</p>
                </div>
            </div>

            <div className="main">
                { children }
            </div>
        </div>
    </Rnd>
  )
}

export default Macwindows;
