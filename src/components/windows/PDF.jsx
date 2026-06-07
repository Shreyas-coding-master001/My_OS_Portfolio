import React from 'react';
import Macwindows from './Macwindows';
import "./PDF.scss";

const PDF = ({ windowName }) => {
  return (
    <Macwindows windowName={windowName}>
        <div className="resume-container">
            <iframe 
                src="./SHREYAS_PATIL __CV.pdf"
            />
        </div>
    </Macwindows>
  )
}

export default PDF;
