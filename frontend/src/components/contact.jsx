import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-row w-full items-center justify-center gap-[60px]'>
      <div className='p-2'>
        <h2 className='text-primary text-6xl w-150'>Paper planes, pixels, and possibilities!</h2>
        <hr className='w-150 text-sm ml-[20px] mb-5 mt-5 text-text'></hr>
        <p className='text-text w-180 text-2xl'>Have an idea flying around in your mind? Let’s catch it together. <br></br>
            I’m just a message away — 
            say <span className='italic font-poppins text-3xl bolder'>Hi!</span> and let’s turn your vision into something beautiful.</p>
      </div>
      <div className='flex flex-col p-2'>
        <div className='flex flex-row w-120 gap-4'>   
            <input type="text" placeholder="Name" className="input input-ghost w-full input-lg border-0 border-b border-b-gray-700" />
            <input type="email" placeholder="Email Id" className="input input-ghost w-full input-lg border-0 border-b border-b-gray-700" />
        </div>
        <textarea className="textarea textarea-ghost input-lg w-120 border-0 border-b border-b-gray-700 mt-10" placeholder="Message"></textarea>
        <button type='submit' className=' text-text hover:bg-primary hover:scale-105 
            transform transition-transform duration-300 
            text-xl border p-2 px-5 rounded-3xl w-40 mt-10'>Send</button>
      </div>
    </div>
  )
}

export default Contact;
