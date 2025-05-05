import React from 'react';
import Bubbles from './Bubbles';

const About = () => {
  return (
    <>
        <div className='text-center justify-items-center w-full mt-60'>
            <p className='w-100 sm:w-300 font-[200] text-4xl text-start sm:text-center sm:text-5xl'>
                I’m Kalpa — a frontend developer and designer passionate about creating interactive, user-first experiences.
            </p>
            <h1 className='mt-[50px] text-4xl sm:text-5xl text-start sm:text-center w-100 sm:w-250'>
                This journey has just begun — and there’s so much more to create.    
            </h1>
            {/* <Bubbles/> */}
        </div>
    </>
  )
}

export default About
