import React ,{useEffect} from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'
export default function Contact(props) {
  useEffect(()=>{
    Aos.init({
    duration:1000
    })
    },[])
  return (
    <div id="contact" ref={props.carRef} className='flex flex-col justify-center w-full items-center  bg-contact text-white mx-auto pt-[175px] pb-[130px]'>
        <div className='flex flex-col justify-center w-full max-w-[1200px] items-center  mx-auto '>

       <div className='bold text-center text-5xl ' data-aos = "fade-right">CONTACT</div>
      <div className="bg-white w-[110px] h-1 m-auto mt-[25px] mb-10"></div>
      <div className='text-bluePrimary font-semibold text-center ' data-aos = "fade-left">
      Have a question or want to work together? 
      </div>
      <form className=' mt-10 mx-auto min-w-[95%] sm:min-w-[500px]' data-aos = "fade-up">
        <input type="text" placeholder='Name'  required className='py-2 px-4 w-full  block outline-none bg-inputbg mb-2'/>
        <input type="text" placeholder='Email' required className='py-2 px-4 w-full  block outline-none bg-inputbg mb-2'/>
        <textarea name="" id="" cols="20" rows="7" required placeholder='Your Message' className='py-2 px-4  w-full block outline-none bg-inputbg mb-2'></textarea>
        <button className='border-2 block px-7 py-2 float-right hover:bg-bluePrimary hover:border-bluePrimary duration-300'>Submit</button>
      </form>
        </div>
    </div>
  )
}

