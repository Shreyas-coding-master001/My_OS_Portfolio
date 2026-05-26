import React from 'react';
import "./App.scss";
import Dock from "./components/Dock.jsx";
import Nav from "./components/Nav.jsx";

const App = () => {
  return (
    <main> 
      <Nav />
      <Dock />
    </main>
  )
}

export default App
