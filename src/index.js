import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DarkmodecontextProvider } from './context/Darkmodecontext';
import { createRoot } from 'react-dom/client'; // Import createRoot from the correct location

const root = createRoot(document.getElementById('root')); // Use createRoot from react-dom/client
root.render(
  <React.StrictMode>
    <DarkmodecontextProvider>
      <App />
    </DarkmodecontextProvider>
  </React.StrictMode>
);
