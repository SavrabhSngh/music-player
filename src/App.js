import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MusicPlayer from "./Components";
import NoMatch from "./Components/NoMatch/NoMatch";
import "./App.css";

const App = () => {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    window.addEventListener("contextmenu", handleContextMenu);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MusicPlayer />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
