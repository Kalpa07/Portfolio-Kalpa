import React from 'react';
import HeroSection from '../components/heroSection';
import SkillSection from '../components/skillSection';
import PaperPlane from '../components/plane';

const Portfolio = () => {
  return (
    // <div className="relative overflow-hidden h-[300vh]">
    <div className="relative h-[300vh] overflow-hidden">

       <div className=' bg-base-100'>
        {/* <div className=" w-screen h-screen bg-cover bg-center bg-no-repeat z-[-1]
                    bg-[url('/images/phone-bg.png')] 
                    sm:bg-[url('/images/phone-bg.png')] 
                    md:bg-[url('/images/tablet-bg.png')] 
                    lg:bg-[url('/images/laptop-bg.png')] 
                    xl:bg-[url('/images/laptop-bg.png')] 
                    2xl:bg-[url('/images/Background.png')]"> */}
        <div className="sticky top-0 h-screen z-0">
          <div className="w-full h-full bg-cover bg-center bg-no-repeat 
            bg-[url('/images/phone-bg.png')] 
                    sm:bg-[url('/images/phone-bg.png')] 
                    md:bg-[url('/images/tablet-bg.png')] 
                    lg:bg-[url('/images/laptop-bg.png')] 
                    xl:bg-[url('/images/laptop-bg.png')] 
                    2xl:bg-[url('/images/Background.png')]">
          </div>
        </div>

          {/* <HeroSection />
          <PaperPlane className='h-[150px]'/>
          <SkillSection />  */}
            {/* Animated Foreground */}
          <div className="sticky top-0 h-screen z-10 pointer-events-none">
            <HeroSection />
            <PaperPlane />
          </div>

          {/* Next section (starts when sticky ends) */}
          <div className="relative z-20">
            <SkillSection />
          </div>
      </div>
    </div>
  );
};

export default Portfolio;
