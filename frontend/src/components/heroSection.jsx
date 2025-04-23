import React from 'react'
import { Github, Linkedin, FileUser } from 'lucide-react';


const HeroSection = () => {
  return (
    <>
      <div className='flex flex-row justify-between hero-section'>
        <div>
          <img src='/images/lamp.png' className='h-[270px]' />
        </div>
        <div className='flex flex-row mt-10 justify-between gap-15 mr-15'>
          <div className='font-poppins text-white text-100 tracking-wider'>Projects</div>
          <div className='font-poppins text-white text-100 tracking-wider'>Contact</div>
        </div>
      </div>

      {/* name, brief and links */}
      <div className='flex flex-row justify-center'>
        <div className='justify-self-center'>
          <h1 className='font-dancing text-[160px] -rotate-[8.24deg]'>Kalpa Teli</h1>
        </div>
        <div className='justify-items-end justify-end mt-10 ml-[50px]'>
          <div className='w-120 text-end'>
            <h1 className='font-poppins font-extrabold text-3xl italic'>Frontend Developer</h1>
            <p className='text-lg mt-2 font-light'>
              Passionate about creating user-friendly, visually appealing web experiences, I blend clean code with thoughtful design.
              With a background in UI/UX and frontend development, I deliver seamless digital solutions
            </p>
          </div>
          <div className='flex flex-row gap-5 mt-5 mr-2'>
            <a href="/documents/Resume-KalpaTeli.pdf" target="_blank" rel="noopener noreferrer" download><FileUser/></a>
            <a href="https://github.com/Kalpa07" ><Github/></a>
            <a href="https://www.linkedin.com/in/kalpa-teli-4b3489204/" ><Linkedin/></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection;
