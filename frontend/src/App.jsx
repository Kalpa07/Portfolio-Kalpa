import React, { useEffect } from 'react'
import Portfolio from './pages/Portfolio'
import Home from './pages/Home';


const App = () => {

  useEffect(() => {

  localStorage.setItem("theme",'dark')
  const selectedTheme= localStorage.getItem("theme");

  if(selectedTheme){
    document.body.classList.add(selectedTheme);
  }else if(window.matchMedia("(prefers-color-scheme:dark")){
    document.body.classList.add('dark');
  }
  else{
    document.body.classList.add('light');
  }

  },[]);

  return (
    <div className="data-theme:selectedTheme">
      <Home/>
    </div>
  )
}

export default App
