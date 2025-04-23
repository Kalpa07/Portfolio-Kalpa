import React from 'react'
import {useState} from 'react'
import { Github, Linkedin, FileUser } from 'lucide-react';
import { Menu, X } from 'lucide-react';

const HeroSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className='flex flex-row justify-between hero-section'>
        <div>
          <img src='/images/lamp.png' className='h-[150px] sm:h-[270px]' />
        </div>
        {/* <div className='flex flex-row mt-10 justify-between gap-15 mr-15'>
          <div className='font-poppins text-white text-100 tracking-wider'>Projects</div>
          <div className='font-poppins text-white text-100 tracking-wider'>Contact</div>
        </div> */}
          {/* Desktop Nav Links */}
        <div className='hidden sm:flex gap-10 mr-10 mt-10 font-poppins text-white text-lg tracking-wider'>
          <div className='cursor-pointer hover:text-gray-300'>Projects</div>
          <div className='cursor-pointer hover:text-gray-300'>Contact</div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className='sm:hidden'>
          {isSidebarOpen ? (
            <X
              className='text-white w-6 h-6 cursor-pointer'
              onClick={() => setIsSidebarOpen(false)}
            />
          ) : (
            <Menu
              className='text-white mr-5 mt-5 w-6 h-6 cursor-pointer'
              onClick={() => setIsSidebarOpen(true)}
            />
          )}
        </div>
      </div>

      {/* --- MOBILE SIDEBAR --- */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] sm:hidden bg-[#1e293b] z-50 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col items-end p-6 gap-6 text-white font-poppins text-lg'>
          <X className='w-8 h-6 cursor-pointer' onClick={() => setIsSidebarOpen(false)} />
          <div onClick={() => setIsSidebarOpen(false)} className='cursor-pointer mr-15'>Projects</div>
          <div onClick={() => setIsSidebarOpen(false)} className='cursor-pointer mr-15'>Contact</div>
        </div>
        </div>

      {/* name, brief and links */}
      <div className='sm:flex flex-row justify-center'>
        <div className='justify-self-center'>
          <h1 className='font-dancing text-[70px] -rotate-[8.24deg] mt-20 sm:text-[160px]'>Kalpa Teli</h1>
        </div>
        <div className='sm:justify-items-end justify-end mt-50 sm:mt-10 ml-[50px]'>
          <div className='w-70 sm:w-120 sm:text-end'>
            <h1 className='font-poppins font-extrabold text-lg sm:text-3xl italic'>Frontend Developer</h1>
            <p className='text-xs sm:text-lg mt-2 font-light'>
              Passionate about creating user-friendly, visually appealing web experiences, I blend clean code with thoughtful design.
              With a background in UI/UX and frontend development, I deliver seamless digital solutions
            </p>
          </div>
          <div className='flex flex-row gap-5 mt-5 mr-2'>
            <a href="/documents/Resume-KalpaTeli.pdf" target="_blank" rel="noopener noreferrer" download><FileUser className='height-[20px] '/></a>
            <a href="https://github.com/Kalpa07" ><Github className='height-[20px]'/></a>
            <a href="https://www.linkedin.com/in/kalpa-teli-4b3489204/" ><Linkedin className='height-[20px]' /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection;