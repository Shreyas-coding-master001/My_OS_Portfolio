import React from 'react';
import "./Dock.scss";
import { docks } from "../data/quicklinks.js";
import { FaLinkedin } from "react-icons/fa6";
import { IoTerminal } from "react-icons/io5";

const Dock = () => {


  return (
    <footer>

      <div className="icons linkedin" title="Open My Linkedlin">
        <p>Linkedlin</p>
        <a href="https://linkedin.com/in/shreyas-kumar-7b3b0b1b1" target="_blank">
          <FaLinkedin size={35} color="#0A66C2" />
        </a>
      </div>
      {docks.map((dock, index) => (
        <div className={`icons ${dock.name}`} key={index} title= {dock.title}>
          <p>{dock.name}</p>
          <a href={dock.link} target="_blank" >
            <img src={dock.icon} alt={dock.name} />
          </a>
        </div>
      ))}
      <div className="icons Terminal" title="Open Termianl/CMD">
        <p>Terminal</p>
        <a href="https://linkedin.com/in/shreyas-kumar-7b3b0b1b1" target="_blank">
          <IoTerminal size={35} color="black" />
        </a>
      </div>
        
    </footer>
  )
}

export default Dock;
