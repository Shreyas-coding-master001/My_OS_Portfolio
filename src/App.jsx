import React from 'react';
import "./App.scss";
import Dock from "./components/Dock.jsx";
import Nav from "./components/Nav.jsx";
import Github from './components/windows/Github.jsx';
import Notes from './components/windows/Notes.jsx';
import PDF from './components/windows/PDF.jsx';
import Spotify from './components/windows/Spotify.jsx';

const App = () => {
  return (
    <main> 
      <Nav />
      <Dock />

      <Github />  
      <Notes />
      <PDF />
      <Spotify />
    </main>
  )
}



export default App
