import React, { useState } from 'react';
import { Github, Linkedin, FileUser, Menu, X } from 'lucide-react';

const HeroSection = ({  handleThemeToggle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


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
        {/* Lamp toggle */}
        <div  onClick={handleThemeToggle} className='cursor-pointer'>
          <img 
            src='/images/lamp.png'
            className='h-[150px] sm:h-[270px]' 
            alt="Toggle Theme" 
          />
        </div>

        {/* Desktop Nav Links */}
        <div className='hidden sm:flex gap-10 mr-10 mt-10 font-poppins text-text text-lg tracking-wider'>
          <div className='cursor-pointer hover:text-gray-300 hover:underline' onClick={() => { scrollTo("projects"); setIsSidebarOpen(false);}}>Projects</div>
          <div className='cursor-pointer hover:text-gray-300 hover:underline' onClick={() => { scrollTo("contact"); setIsSidebarOpen(false);}}>Contact</div>
        </div>

        {/* Mobile Hamburger */}
        <div className='sm:hidden'>
          {isSidebarOpen ? (
            <X className='text-text w-6 h-6 cursor-pointer' onClick={() => setIsSidebarOpen(false)} />
          ) : (
            <Menu className='text-text mr-5 mt-5 w-6 h-6 cursor-pointer' onClick={() => setIsSidebarOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[40%] sm:hidden bg-base-100 z-50 transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className='flex flex-col items-end p-6 gap-6 text-text font-poppins text-lg'>
          <X className='w-8 h-6 cursor-pointer' onClick={() => setIsSidebarOpen(false)} />
          <div onClick={() => {scrollTo("projects");setIsSidebarOpen(false)}} className='cursor-pointer text-center p-2 w-40 active:bg-primary mr-5'>Projects</div>
          <div onClick={() =>  {scrollTo("contact");setIsSidebarOpen(false)}} className='cursor-pointer text-center p-2 w-40 active:bg-primary mr-5'>Contact</div>
        </div>
      </div>

      {/* Name, Description, Socials */}
      <div className='sm:flex flex-row justify-center'>
        <div className='justify-self-center'>
          <h1 className='font-dancing text-[70px] -rotate-[8.24deg] mt-20 sm:text-[160px]'>Kalpa Teli</h1>
        </div>
        <div className='sm:justify-items-end justify-end mt-50 sm:mt-10 ml-[50px]'>
          <div className='w-80 sm:w-120 sm:text-end'>
            <h1 className='font-poppins font-extrabold text-lg sm:text-3xl italic'>Frontend Developer</h1>
            <p className='text-md sm:text-lg mt-2 font-light'>
              Passionate about creating user-friendly, visually appealing web experiences, I blend clean code with thoughtful design.
              With a background in UI/UX and frontend development, I deliver seamless digital solutions
            </p>
          </div>
          <div className='flex flex-row gap-5 mt-5 mr-2'>
            <a href="/documents/Resume-KalpaTeli.pdf" target="_blank" rel="noopener noreferrer" download><FileUser className='height-[20px]' /></a>
            <a href="https://github.com/Kalpa07"><Github className='height-[20px]' /></a>
            <a href="https://www.linkedin.com/in/kalpa-teli-4b3489204/"><Linkedin className='height-[20px]' /></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
