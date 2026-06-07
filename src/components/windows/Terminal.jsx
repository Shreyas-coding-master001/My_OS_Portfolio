import React from 'react';
import Macwindows from './Macwindows.jsx';
import "./Terminal.scss";
import TerminalModule from "react-console-emulator";

const commands = {
  about: {
    description: 'A short, witty portfolio introduction.',
    usage: 'about',
    fn: () =>
      'I build polished front-end & secure/scalable back-end experiences with MERN stack and AI entheutist. Type or `skills` to keep exploring.',
  },
  skills: {
    description: 'List core skills without the buzzwords.',
    usage: 'skills',
    fn: () =>
      'React, JavaScript, Sass, responsive design, component architecture, Node, Express, MongoDB, redis, MySQL, Docker, ML/NLP.',
  },
  contact: {
    description: 'How to reach me (no carrier pigeons needed).',
    usage: 'contact',
    fn: () =>
      'Email: shreyaspatil367@gmail.com\nGitHub: https://github.com/Shreyas-coding-master001\nLinkedIn: https://linkedin.com/in/shreyas-kumar-7b3b0b1b1',
  },
  github: {
    description: 'Reveal the source code den.',
    usage: 'github',
    fn: () => 'Check out my projects at https://github.com/Shreyas-coding-master001',
  },
  linkedin: {
    description: 'Showcase the professional profile link.',
    usage: 'linkedin',
    fn: () => 'Connect professionally at https://www.linkedin.com/in/shreyas-patil-0a9581297',
  },
  resume: {
    description: 'Fetch a mini resume summary.',
    usage: 'resume',
    fn: () =>
      'Full stack developer with a focus on MERN stack and UI/UX polish. Experienced building websites that feel intentional and delightful.',
  },
  cheer: {
    description: 'A little terminal encouragement.',
    usage: 'cheer',
    fn: () => 'Well done! You just used the portfolio terminal like a boss. Keep exploring!',
  },
};

const Terminal = TerminalModule.default || TerminalModule;

const Cli = () => {
  return (
    <Macwindows>
      <div className="Cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={'Welcome to my portfolio terminal. Type `about` or `help` to begin.'}
          promptLabel={'shreyaspatil:~$'}
          errorText={"Invalid command all commands are present in 'help' command just type `help`"}
          ignoreCommandCase
          promptLabelStyle= {{color: "rgb(0, 255, 42)"}}
          inputAreaStyle = {{ backgroundColor : "black"}}
        />
      </div>
    </Macwindows>
  );
};

export default Cli;
