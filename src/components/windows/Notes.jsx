import React, { useEffect,useState } from 'react';
import Macwindows from './Macwindows';
import "./Notes.scss";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Notes = ({ windowName }) => {

  const [noteContent, setNoteContent] = useState(null);

  useEffect(() => {
    fetch("./note.txt")
    .then(res => res.text())
    .then(data => {
      setNoteContent(data);
    });
  }, []);

  return (
    <Macwindows windowName={windowName}>
        <div className="Notes">
            <h2> 
              <img src='./Nav_icons/notes-svgrepo-com.svg' alt='Notes Icon' 
                width={20} 
              />
              Notes 
            </h2>

            <div className="main-content">
              {noteContent ?
              <SyntaxHighlighter language="javascript" style={atomOneDark}>
                 {noteContent} 
              </SyntaxHighlighter>
              : "Loading..."}
            </div>
        </div>
    </Macwindows>
  )
}

export default Notes;
