import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState(false);

  function toggle() {
    setMode((prevState) => !prevState);
  }

  return (
    <div className="container">
      <Navbar darkMode={mode} toggleDarkMode={toggle} />
      <Main darkMode={mode} />
    </div>
  );
}
