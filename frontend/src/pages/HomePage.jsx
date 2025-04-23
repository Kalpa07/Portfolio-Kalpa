import React from 'react';
import { motion as Motion} from 'framer-motion';
import { Github, Linkedin, FileUser } from 'lucide-react';

const HomePage = () => {
  return (
    <div className='bg-base-100'>
      <div className="w-screen h-screen bg-cover bg-center  overflow-hidden bg-no-repeat 
                  bg-[url('/images/phone-bg.png')] 
                  sm:bg-[url('/images/phone-bg.png')] 
                  md:bg-[url('/images/tablet-bg.png')] 
                  lg:bg-[url('/images/laptop-bg.png')] 
                  xl:bg-[url('/images/laptop-bg.png')] 
                  2xl:bg-[url('/images/Background.png')]">
                
          {/* theme and nav links */}
          <div className='flex flex-row justify-between'>
            <div>
              <img src='/images/lamp.png' className='h-[270px]'/>
            </div>
            <div className='flex flex-row mt-10 justify-between gap-15 mr-15'>
                <div className='font-poppins font-white text-100 tracking-wider'>Projects</div>
                <div className='font-poppins font-white text-100 tracking-wider'>Contact</div>
            </div>
          </div>
          {/* name , brief and links */}
          <div className='flex flex-row justify-center'>
            <div className='justify-self-center'>
              {/* name */}
              <div>
                <h1 className='font-dancing  text-[160px] -rotate-[8.24deg]'>Kalpa Teli</h1>
              </div>
              <div>
                <img src='/images/plane1.png'className='h-[150px] justify-self-end -mt-[60px] -mr-[35px]' />
              </div>
            </div>
            {/* brief */}
            <div className='justify-items-end justify-end mt-10 ml-[50px]'>
              <div className='w-120 text-end '>
                <h1 className='font-poppins font-extrabold text-3xl italic'>Frontend Developer</h1>
                <p className='text-lg mt-2 font-light'>Passionate about creating user-friendly, visually appealing web experiences, I blend clean code with thoughtful design. 
                  With a background in UI/UX and frontend development, I deliver seamless digital solutions
                </p>
              </div>
              {/* icon links  */}
              <div className='flex flex-row gap-5 mt-5 mr-2'>
                <FileUser className=''/>
                <Github className=''/>
                <Linkedin className=''/>
              </div>
            </div>

          </div>
      </div>
    </div>
  );
};

export default HomePage;
