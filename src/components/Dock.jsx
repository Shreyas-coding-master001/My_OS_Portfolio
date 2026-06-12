import React from 'react';
import "./Dock.scss";
import { docks } from "../data/quicklinks.js";
import { FaLinkedin } from "react-icons/fa6";
import { IoTerminal } from "react-icons/io5";
import { useWindowsContext } from '../context/windows.context.jsx';

const Dock = () => {

  const { windowsState, setWindowsState } = useWindowsContext();
  

  const handlewindows = (ele) => {
      let name = ele.currentTarget.dataset.name;
      name = name.toLowerCase();
      let prev = windowsState;
      
      prev = { ...prev, 
        [name] : !prev[name]
      };
      setWindowsState(prev);
    }
  

  return (
    <footer>
      <div className="icons linkedin" 
      title="Open My Linkedlin" data-name="linkedlin"
      onClick={handlewindows}
      >
        <p>Linkedlin</p>
          <FaLinkedin size={35} color="#0A66C2" />
      </div>
      {docks.map((dock, index) => (
        <div className={`icons ${dock.name}`} 
        key={index} title={dock.title} data-name={dock.name}
        onClick={handlewindows}
        >
          <p>{dock.name}</p>
            <img src={dock.icon} alt={dock.name} />
        </div>
      ))}
      <div className="icons Calendar" 
      title="Open Google Calendat" data-name="calendar"
      onClick={() => {window.open("https://calendar.google.com/calendar",)}}>
        <p>Calendar</p>
        
          <img src="./Docks/calender.svg" alt="Calendar" />
      </div>
      <div className="icons Email" 
      title="Mail Me" data-name="mail"
      onClick={() => {window.open("mailto:shreyaspatil367@gmail.com", "_blank")}}>
        <p>Mail</p>
        
          <img src="./Docks/mail.svg" alt="Mail" />
      </div>
      <div className="icons Terminal" 
      title="Open Termianl/CMD" data-name="cli"
      onClick={handlewindows}>
        <p>Terminal</p>
        
          <IoTerminal size={35} color="black" />
      </div>
        
    </footer>
  )
}

export default Dock;
