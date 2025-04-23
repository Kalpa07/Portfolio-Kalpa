import React from 'react';

const SkillSection = () => {
  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center'>
        <div>
          <div className=' ml-2'>
            <h1 className='text-[60px]'> Skills</h1>
          </div>
          <div>
            <div className='grid grid-cols-2 gap-x-30 gap-y-5 '>
              <div className='relative flex flex-col justify-center h-34 w-80 overflow-hidden skill'>
                <div className="absolute inset-0 skillText skillText1"></div>
                <div className="relative z-10 bg-primary rounded-full h-30 w-30 skillImg"></div>
              </div>
              <div className='relative flex flex-col justify-center h-34 w-80 overflow-hidden skill'>
                <div className="absolute inset-0 skillText skillText2"></div>
                <div className="relative z-10 bg-secondary rounded-full h-30 w-30 skillImg"></div>
              </div>
              <div className='relative flex flex-col justify-center h-34 w-80 overflow-hidden skill'>
                <div className="absolute inset-0 skillText skillText3"></div>
                <div className="relative z-10 bg-accent rounded-full h-30 w-30 skillImg"></div>
              </div>
              <div className='relative flex flex-col justify-center h-34 w-80 overflow-hidden skill'>
                <div className="absolute inset-0 skillText skillText1"></div>
                <div className="relative z-10 bg-primary rounded-full h-30 w-30 skillImg"></div>
              </div>
              <div className='relative flex flex-col justify-center h-34 w-80 overflow-hidden skill'>
                <div className="absolute inset-0 skillText skillText2"></div>
                <div className="relative z-10 bg-secondary rounded-full h-30 w-30 skillImg"></div>
              </div>
              <div className='relative flex flex-col justify-center h-34 w-80 overflow-hidden skill'>
                <div className="absolute inset-0 skillText skillText3"></div>
                <div className="relative z-10 bg-accent rounded-full h-30 w-30 skillImg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillSection;
