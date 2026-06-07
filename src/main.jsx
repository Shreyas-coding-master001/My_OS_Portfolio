import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { WindowsProvider } from './context/windows.context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WindowsProvider>
      <App />
    </WindowsProvider>
  </StrictMode>,
);
