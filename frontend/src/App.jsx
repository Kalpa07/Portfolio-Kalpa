import React, { useEffect, useState } from 'react';
import Projects from './pages/Projects';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Loader from "./components/Loader";
import ResumePage from './pages/ResumePage';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {

    localStorage.setItem("theme", 'dark')
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add('dark');
    }
    else {
      document.body.classList.add('light');
    }

  }, []);

  if (loading) return <Loader onComplete={() => setLoading(false)} />;

  return (
    <div className="data-theme:selectedTheme">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume-Kalpa" element={<ResumePage />} />
      </Routes>
    </div>
  );
};

export default App;
