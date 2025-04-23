import React from 'react';

const SkillSection = () => {
  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center'>
        <div>
          <div className='justify-items-center'>
            <h1 className='text-[60px]'> Skills</h1>
          </div>
          <div>
            <div className='grid grid-cols-2 gap-x-30 gap-y-5 '>

              <div className='relative flex flex-col justify-center h-34 w-100 overflow-hidden skill'>
                <div className="absolute inset-0 skillText skillText2 "></div>
                <div className='inset-0 text-end pl-[95px] pt-[5px] pr-[5px] self-end w-[380px] textSkill text-white '>
                  <h3 className='text-xl italic bold'>React.js</h3>
                  <span className=''>
                    I build dynamic, reusable UI components with React.js for high-performance web applications.
                  </span>
                </div>
                <div className="absolute z-10 bg-base-100 rounded-full h-30 w-30 shadow-lg skillImg bg-cover" 
                style={{ backgroundImage: "url('/images/react.png')" }}></div>
              </div>

              <div className='relative flex flex-col justify-center h-34 w-100 overflow-hidden skill'>
                <div className="absolute inset-0 skillTextDiv skillTextDiv1 "></div>
                <div className='inset-0 text-start pr-[95px] pt-[5px] pl-[5px] self-start w-[380px] textSkillDiv text-white '>
                  <h3 className='text-xl italic bold'>Angular 16</h3>
                  <span className=''>
                    I use Angular to develop scalable, modular frontend applications with TypeScript for robust functionality.
                  </span>
                </div>
                <div className="absolute z-10 bg-base-100 rounded-full self-end h-30 w-30 skillImg1 shadow-lg bg-cover" 
                style={{ backgroundImage: "url('/images/angular.png')" }}>
                </div>
              </div>

              <div className='relative flex flex-col justify-center h-34 w-100 overflow-hidden skill'>
                <div className="absolute inset-0 skillTextDiv skillTextDiv3 "></div>
                <div className='inset-0 text-start pr-[95px] pt-[5px] pl-[5px] self-start w-[380px] h-30 textSkillDiv text-white '>
                  <h3 className='text-xl italic bold'>Figma</h3>
                  <span className=''>
                  I design user-friendly interfaces in Figma for smooth UI/UX collaboration and prototyping.
                  </span>
                </div>
                <div className="absolute bg-base-100 z-10 rounded-full self-end h-30 w-30 shadow-lg skillImg1 bg-cover" 
                style={{ backgroundImage: "url('/images/figma.png')" }}></div>
              </div>

              <div className='relative flex flex-col justify-center h-34 w-100 overflow-hidden skill'>
                <div className="absolute inset-0 skillText skillText1 "></div>
                <div className='inset-0 text-end pl-[95px] pt-[5px] pr-[5px] self-end w-[380px] textSkill text-white '>
                  <h3 className='text-xl italic bold'>Tailwind CSS</h3>
                  <span className=''>
                    I use Tailwind CSS for fast, responsive styling with utility-first classes.
                  </span>
                </div>
                <div className="absolute z-10 bg-base-100 rounded-full h-30 w-30 shadow-lg skillImg bg-cover" 
                style={{ backgroundImage: "url('/images/tailwind.png')"}}></div>
              </div>

              <div className='relative flex flex-col justify-center h-34 w-100 overflow-hidden skill'>
                <div className="absolute inset-0 skillText skillText3 "></div>
                <div className='inset-0 text-end pl-[95px] pt-[5px] pr-[5px] self-end w-[380px] textSkill text-white '>
                  <h3 className='text-xl italic'>TypeScript</h3>
                  <span className=''>
                    I use TypeScript to enhance code quality and maintainability with static typing.  
                  </span>
                </div>
                <div className="absolute z-10 bg-base-100 rounded-full h-30 w-30 shadow-lg skillImg bg-fit bg-no-repeat " 
                style={{ backgroundImage: "url('/images/ts.png')" , backgroundSize:'120px' }}></div>
              </div>


              <div className='relative flex flex-col justify-center h-34 w-100 overflow-hidden skill'>
                <div className="absolute inset-0 skillTextDiv skillTextDiv2 "></div>
                <div className='inset-0 text-start pr-[95px] pt-[5px] pl-[5px] self-start w-[380px] h-30 textSkillDiv text-white '>
                  <h3 className='text-xl italic bold'>HTML/CSS/JS</h3>
                  <span className=''>
                  I build responsive web pages with HTML, CSS, and JavaScript for structure and interactivity.
                  </span>
                </div>
                <div className="absolute bg-base-100 z-10 rounded-full self-end h-30 w-30 shadow-lg skillImg1 bg-cover" 
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
