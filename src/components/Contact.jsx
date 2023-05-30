import React from 'react'

export default function Contact() {
  return (
    <div className='flex flex-col justify-center w-full items-center  bg-contact text-white mx-auto pt-[175px] pb-[130px]'>
        <div className='flex flex-col justify-center w-full max-w-[1200px] items-center  mx-auto '>

       <div className='bold text-center text-5xl '>CONTACT</div>
      <div className="bg-white w-[110px] h-1 m-auto mt-[25px] mb-10"></div>
      <div className='text-bluePrimary font-semibold text-center '>
      Have a question or want to work together? 
      </div>
      <form className=' mt-10 mx-auto min-w-[95%] sm:min-w-[500px]'>
        <input type="text" placeholder='Name'  required className='py-2 px-4 w-full  block outline-none bg-inputbg mb-2'/>
        <input type="text" placeholder='Email' required className='py-2 px-4 w-full  block outline-none bg-inputbg mb-2'/>
        <textarea name="" id="" cols="30" rows="10" required placeholder='Your Message' className='py-2 px-4  w-full block outline-none bg-inputbg mb-2'></textarea>
        <button className='border-2 block px-7 py-2 float-right hover:bg-bluePrimary hover:border-bluePrimary duration-300'>Submit</button>
      </form>
        </div>
    </div>
  )
}

