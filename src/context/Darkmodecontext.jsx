import React, { createContext, useState } from 'react';

export const Darkmodecontext = createContext();

export const DarkmodecontextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <Darkmodecontext.Provider value={{ darkMode, toggle: toggleDarkMode }}>
      {children}
    </Darkmodecontext.Provider>
  );
};
