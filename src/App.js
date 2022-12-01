import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lottie from "react-lottie";
import NoMatch from "./Components/NoMatch/NoMatch";
import AnimationData from "./DocumentLoader.json";
import "./App.css";
const MusicPlayer = lazy(() => import("./Components"));

const App = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
    <Suspense
      fallback={
        <div className="fallback">
          <Lottie options={defaultOptions} height={250} width={250} />
        </div>
      }
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<MusicPlayer />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
