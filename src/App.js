import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar/Navbar";
import "./Style.scss";
import Profile from "./Profile/Profile";
import { Darkmodecontext } from './context/Darkmodecontext';

function App() {
  const { darkMode } = useContext(Darkmodecontext);

  return (
    <>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>

    <Navbar/>
    
<Profile/>
</div>
    </>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App);

export default App;
