import React, { useEffect } from 'react'
import Portfolio from './pages/Portfolio'
import Projects from './pages/Projects';
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';


const App = () => {

  useEffect(() => {

  localStorage.setItem("theme",'dark')
  const selectedTheme= localStorage.getItem("theme");

  if(selectedTheme){
    document.body.classList.add(selectedTheme);
  }else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
    document.body.classList.add('dark');
  }
  else{
    document.body.classList.add('light');
  }

  },[]);

  return (
    <div className="data-theme:selectedTheme">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
    </div>
  )
}

export default App
