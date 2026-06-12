import React, { useState } from 'react';
import { Rnd } from "react-rnd";
import "./Macwindows.scss";
import { useWindowsContext } from '../../context/windows.context';

const Macwindows = ({ children, windowName }) => {

    const [zIndex, setIndex] = useState(1);
    const { windowsState, setWindowsState, width, height, setwidth, setheight } = useWindowsContext();
    const [windowsClose, setwindowsClose] = useState(false);
    const [Shift, setShift] = useState({x: "50%", y: "50%"});

    const [isOpen, setIsOpen] = useState({
        red: false,
        yellow: false,
        green: false,
    });

    const handleClose = () => {
        setwindowsClose(true);
        setTimeout(() => {
            let prev = windowsState;
            prev = { ...prev, [windowName] : !prev[windowName] }
            setWindowsState(prev);    
        }, 100);
        
    }

    const FullScreen = () => {
        setwidth("100vw");
        setheight("100vh");

        let { x, y } = Shift;
        x = "0";
        y = "0";
        const obj = {x,y}
        setShift(obj);
    }

  return (
    <Rnd
      default={{
        x: 200,
        y: 80,
        top: Shift.x,
        left: Shift.y,
        width: width,
        height: height,
      }}
      style={{ zIndex: zIndex !== 1 ? zIndex : 1 }}
    >
        <div className={`window ${windowsClose? "" : "Close"}`}
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
                    onClick={ handleClose }
                > {isOpen.yellow? '-' : ''} </div>
                <div className="dot green"
                    onMouseEnter={() => setIsOpen(prev => ({ ...prev, green: true }))}
                    onMouseLeave={() => setIsOpen(prev => ({ ...prev, green: false }))}
                    title='Full-Screen'
                    onClick={ FullScreen }
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
