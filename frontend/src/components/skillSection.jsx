import React from 'react';
import '../index.css';


const SkillSection = () => {
  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center skill-section'>
        <div>
          <div className='justify-items-center'>
            <h1 className='text-[40px] sm:text-[60px]'> Skills</h1>
          </div>
          <div className='mb-2 '>
            <div className='flex flex-col sm:grid sm:grid-cols-2 gap-x-16 sm:gap-x-30 gap-y-2 sm:gap-y-5 '>

              <div className='relative flex flex-col justify-center order-1 h-25 w-70 sm:h-34 sm:w-100 overflow-hidden skill'>
                <div className="absolute inset-0 skillText skillText2 "></div>
                <div className='inset-0 text-end pl-[95px] pt-[5px] pr-[5px] self-end w-[260px] sm:w-[380px] textSkill text-text '>
                  <h3 className='text-sm sm:text-xl italic bold'>React.js</h3>
                  <span className='text-[10px] leading-[2] block'>
                    I build dynamic, reusable UI components with React.js for high-performance web applications.
                  </span>
                </div>
                <div className="absolute z-10 bg-base-100 rounded-full h-20 w-20 sm:h-30 sm:w-30 shadow-lg skillImg bg-cover" 
                style={{ backgroundImage: "url('/images/react.png')" }}></div>
              </div>

              <div className='relative flex flex-col justify-center order-2 h-25 w-70 sm:h-34 sm:w-100 overflow-hidden skill'>
                <div className="absolute inset-0 skillTextDiv skillTextDiv1 "></div>
                <div className='inset-0 text-start pr-[95px] pt-[5px] pl-[5px] self-start w-[260px] sm:w-[380px] textSkillDiv text-text '>
                  <h3 className='text-sm sm:text-xl italic bold'>Angular 16</h3>
                  <span className='text-[10px] leading-[2] block'>
                    I use Angular to develop scalable, modular frontend applications with TypeScript for robust functionality.
                  </span>
                </div>
                <div className="absolute z-10 bg-base-100 rounded-full self-end h-20 w-20 sm:h-30 sm:w-30 skillImg1 shadow-lg bg-cover" 
                style={{ backgroundImage: "url('/images/angular.png')" }}>
                </div>
              </div>

              <div className='relative flex flex-col justify-center order-3 sm:order-4 h-25 w-70 sm:h-34 sm:w-100 overflow-hidden skill'>
                <div className="absolute inset-0 skillText skillText2 "></div>
                <div className='inset-0 text-end pl-[95px] pt-[5px] pr-[5px] self-end w-[260px] sm:w-[380px] textSkill text-text '>
                  <h3 className='text-sm sm:text-xl italic bold'>Figma</h3>
                  <span className='text-[10px] leading-[2] block'>
                  I design user-friendly interfaces in Figma for smooth UI/UX collaboration and prototyping.
                  </span>
                </div>
                <div className="absolute z-10 bg-base-100 rounded-full h-20 w-20 sm:h-30 sm:w-30 shadow-lg skillImg bg-cover" 
                style={{ backgroundImage: "url('/images/figma.png')" }}></div>
              </div>

              <div className='relative flex flex-col justify-center order-4 sm:order-3 h-25 w-70 sm:h-34 sm:w-100 overflow-hidden skill'>
                <div className="absolute inset-0 skillTextDiv1 skillTextDiv "></div>
                <div className='inset-0 text-start pr-[95px] pt-[5px] pl-[5px] self-start w-[260px] sm:w-[380px] textSkillDiv text-text '>
                  <h3 className='text-sm sm:text-xl italic bold'>Tailwind CSS</h3>
                  <span className='text-[10px] leading-[2] block'>
                  I use Tailwind CSS for fast, responsive styling with utility-first classes.
                  </span>
                </div>
                <div className="absolute bg-base-100 z-10 rounded-full self-end h-20 w-20 sm:h-30 sm:w-30 shadow-lg skillImg1 bg-cover" 
                style={{ backgroundImage: "url('/images/tailwind.png')" }}></div>
              </div>

              <div className='relative flex flex-col justify-center order-5 h-25 w-70 sm:h-34 sm:w-100 overflow-hidden skill'>
                <div className="absolute inset-0 skillText skillText3 "></div>
                <div className='inset-0 text-end pl-[95px] pt-[5px] pr-[5px] self-end w-[260px] sm:w-[380px] textSkill text-text '>
                  <h3 className='text-sm sm:text-xl italic'>TypeScript</h3>
                  <span className='text-[10px] leading-[2] block'>
                    I use TypeScript to enhance code quality and maintainability with static typing.  
                  </span>
                </div>
                <div className="absolute z-10 bg-base-100 rounded-full sm:bg-[length:120px] bg-[length:80px] h-20 w-20 sm:h-30 sm:w-30 shadow-lg skillImg bg-fit bg-no-repeat " 
                style={{ backgroundImage: "url('/images/ts.png')" }}></div>
              </div>

              <div className='relative flex flex-col justify-center order-6 h-25 w-70 sm:h-34 sm:w-100 overflow-hidden skill'>
                <div className="absolute inset-0 skillTextDiv skillTextDiv2 "></div>
                <div className='inset-0 text-start pr-[95px] pt-[5px] pl-[5px] self-start w-[260px] sm:w-[380px] textSkillDiv text-text '>
                  <h3 className='text-sm sm:text-xl italic bold'>HTML/CSS/JS</h3>
                  <span className='text-[10px] leading-[2] block'>
                  I build responsive web pages with HTML, CSS, and JavaScript for structure and interactivity.
                  </span>
                </div>
                <div className="absolute bg-base-100 z-10 rounded-full self-end h-20 w-20 sm:h-30 sm:w-30 shadow-lg skillImg1 bg-cover" 
                style={{ backgroundImage: "url('/images/html.png')" }}></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillSection;
