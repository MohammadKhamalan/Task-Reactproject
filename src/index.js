import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DarkmodecontextProvider } from './context/Darkmodecontext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkmodecontextProvider>
      <App />
    </DarkmodecontextProvider>
  </React.StrictMode>
);
