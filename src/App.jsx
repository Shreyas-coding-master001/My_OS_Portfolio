import React from 'react';
import "./App.scss";
import Dock from "./components/Dock.jsx";
import Nav from "./components/Nav.jsx";
import Github from './components/windows/Github.jsx';
import Notes from './components/windows/Notes.jsx';
import PDF from './components/windows/PDF.jsx';
import Spotify from './components/windows/Spotify.jsx';
import Linkedlin from "./components/windows/Linkedlin.jsx";
import Cli from './components/windows/Terminal.jsx';
import { useWindowsContext } from "./context/windows.context.jsx";

const App = () => {
  const { windowsState } = useWindowsContext();

  return (
    <main>
      <Nav />
      <Dock />

      {windowsState.github && <Github windowName="github" />}
      {windowsState.notes && <Notes windowName="notes" />}
      {windowsState.resume && <PDF windowName="resume" />}
      {windowsState.spotify && <Spotify windowName="spotify" />}
      {windowsState.linkedlin && <Linkedlin windowName="linkedlin" />}
      {windowsState.cli && <Cli windowName="cli" />}
    </main>
  )
}



export default App
