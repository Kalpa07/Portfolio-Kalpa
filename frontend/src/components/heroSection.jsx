import React, { useState, useEffect } from 'react';
import { Github, Linkedin, FileUser, Menu, X } from 'lucide-react';

const HeroSection = ({ handleThemeToggle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
      setTheme('light');
    }
    else{
      document.body.classList.add('dark-theme');
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  const scrollTo = (id) => {
    document.documentElement.classList.add("nosnap");
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setTimeout(() => document.documentElement.classList.remove("nosnap"), 1000);
  };

  return (
    <>
      <div className='flex flex-row justify-between hero-section'>
        <div onClick={handleThemeToggle} className='cursor-pointer'>
          <img
            src='/images/lamp.png'
            className='h-[150px] sm:h-[270px]'
            alt="Toggle Theme"
            onClick={toggleTheme}
          />
          <div className='hidden dark:block dark:opacity-20 rounded w-100 h-100 ml-10 top-20 sm:ml-25 sm:top-35 fixed z-[-9999] dark:mix-blend-difference'
            style={{
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, #FFAE00 0%, var(--transparent-color) 70%)",
            }}></div>
        </div>

        <div className='hidden sm:flex gap-10 mr-10 mt-10 font-poppins theme-text text-lg tracking-wider'>
          <div className='cursor-pointer hover:underline' onClick={() => { scrollTo("projects"); setIsSidebarOpen(false); }}>Projects</div>
          <div className='cursor-pointer hover:underline' onClick={() => { scrollTo("contact"); setIsSidebarOpen(false); }}>Contact</div>
        </div>

        <div className='sm:hidden'>
          {isSidebarOpen ? (
            <X className='theme-text w-6 h-6 cursor-pointer' onClick={() => setIsSidebarOpen(false)} />
          ) : (
            <Menu className='theme-text mr-5 mt-5 w-6 h-6 cursor-pointer' onClick={() => setIsSidebarOpen(true)} />
          )}
        </div>
      </div>

      <div className={` fixed top-0 right-0 h-full w-[40%] sm:hidden bg-base-100 z-10 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className='relative flex flex-col items-end p-6 gap-6 theme-text font-poppins text-lg'>
          <X className='w-8 h-6 cursor-pointer' onClick={() => setIsSidebarOpen(false)} />
          <div onClick={() => { scrollTo("projects"); setIsSidebarOpen(false) }} className='absolute mt-15 cursor-pointer text-center p-2 w-40 active:bg-primary-color '>Projects</div>
          <div onClick={() => { scrollTo("contact"); setIsSidebarOpen(false) }} className='absolute mt-30 cursor-pointer text-center p-2 w-40 active:bg-primary-color '>Contact</div>
        </div>
      </div>

      <div className='sm:flex flex-row justify-center theme-text'>
        <div className='justify-self-center'>
          <h1 className='font-dancing text-[80px] -rotate-[8.24deg] mt-20 sm:mt-10 sm:text-[160px]'>Kalpa Teli</h1>
        </div>
        <div className=' flex flex-row sm:flex-col sm:justify-items-end justify-end mt-40 sm:mt-20 ml-[50px]'>
          <div className='w-100 sm:w-120 sm:text-end order-2 sm:order-1'>
            <h1 className='font-poppins font-extrabold text-lg sm:text-3xl italic'>Frontend Developer</h1>
            <p className='text-md sm:text-xl mt-2 font-light'>
              Passionate about creating user-friendly, visually appealing web experiences, I blend clean code with thoughtful design.
              With a background in UI/UX and frontend development, I deliver seamless digital solutions
            </p>
          </div>
          <div className='flex flex-col sm:flex-row sm:self-end gap-5 mt-10 sm:mt-5 mr-5 sm:mr-2 order-1 sm:order-2'>
            <div className='relative group self-center w-8'>
              <a href="/documents/KalpaTeli-Resume.pdf" target="_blank" rel="opener noreferrer" download><FileUser className='height-[20px]' /></a>
              <div className="absolute w-max -top-8 left-1/2 -translate-x-1/2 bg-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                Resume
              </div>
            </div>
            <div className='relative group self-center w-8'>
              <a href="https://github.com/Kalpa07"><Github className='height-[20px]' /></a>
              <div className="absolute w-max -top-8 left-1/2 -translate-x-1/2 bg-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                Github
              </div>
            </div>
            <div className='relative group self-center w-8'>
              <a href="https://www.linkedin.com/in/kalpa-teli-4b3489204/"><Linkedin className='height-[20px]' /></a>
              <div className="absolute w-max -top-8 left-1/2 -translate-x-1/2 bg-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                LinkedIn
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
