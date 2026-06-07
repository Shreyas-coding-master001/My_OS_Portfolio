import React, { useState } from 'react';
import { Rnd } from "react-rnd";
import "./Macwindows.scss";
import { useWindowsContext } from '../../context/windows.context';

const Macwindows = ({ children, width="55vw", height="70vh", windowName }) => {

    const [zIndex, setIndex] = useState(1);
    const { windowsState, setWindowsState } = useWindowsContext();

    const [isOpen, setIsOpen] = useState({
        red: false,
        yellow: false,
        green: false,
    });

    const handleClose = () => {
        let prev = windowsState;
        prev = { ...prev, [windowName] : !prev[windowName] }
        setWindowsState(prev);    
        
    }

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
                    title='Close'
                    onClick = { handleClose }
                > {isOpen.red? 'x' : ''} </div>
                <div className="dot yellow"
                    onMouseEnter={() => setIsOpen(prev => ({ ...prev, yellow: true }))}
                    onMouseLeave={() => setIsOpen(prev => ({ ...prev, yellow: false }))}
                    title='Minimize'

                > {isOpen.yellow? '-' : ''} </div>
                <div className="dot green"
                    onMouseEnter={() => setIsOpen(prev => ({ ...prev, green: true }))}
                    onMouseLeave={() => setIsOpen(prev => ({ ...prev, green: false }))}
                    title='Full-Screen'
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
