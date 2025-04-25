import React from 'react'

const ProjectSection = () => {
  return (
    <>
      <div className='flex justify-center relative h-150 mt-20'>
        <div className='absolute inset-0 w-max justify-self-center'>
          <img src='/images/uiPaper-bg.png' className='h-150' />
        </div>
        <div className='absolute z-10 h-150 flex items-center'>
            <button type='button' className=' bg-[#CC6060] border-[#F87171] border-6 w-60 h-18 
                font-poppins text-3xl font-medium shadow-2xl rounded-[20px]
                transform transition-transform duration-300 hover:scale-110'
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}
            > Projects</button>
        </div>
      </div>
    </>
  )
}

export default ProjectSection;