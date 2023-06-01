import React ,{useEffect}from 'react'

import { useQuery } from '@apollo/client'
import {projects} from "../graphql/queries.js"
import Aos from "aos";
import 'aos/dist/aos.css'
export default function Projects(props) {
const {loading , data , error} = useQuery(projects)
useEffect(()=>{
  Aos.init({
  duration:1000
  })
  },[])
  return (
    <div id="project" ref={props.carRef} className='bg-[#f5f5f5] pt-[100px] pb-[130px]'>
        <div className='bold text-center text-7xl text-header' data-aos="slide-right">PROJECTS</div>
  
      <div className="bg-header w-[70px] h-1 m-auto mt-[25px] mb-[100px]" data-aos="slide-left"></div>


   <div>
    <ul className='flex justify-center text-text ' data-aos="fade">
        <li className='cursor-pointer mx-6 px-10 font-semibold bg-highlight text-white'>ALL</li>
        <li className='cursor-pointer mx-6 px-10 font-semibold'>JS</li>
        <li className='cursor-pointer mx-6 px-10 font-semibold'>ReactJS</li>
    </ul>
   </div>
   <div className='flex flex-col flex-wrap items-center sm:flex-row justify-center mt-6 max-w-[1200px] mx-auto'>

      {
        loading ? "" :
        data.projects.map(item =>

          <div key={item.id} data-aos="zoom-in">
          <a href={item.url}>

              <img src={item.projectCover.url} alt=""  className="h-[240px] w-[calc(50vw-8px)] sm:h-[300px] md:w-[390px] object-cover"/>
          </a>
          </div>
            )
          
      }
   </div>
    </div>
  )
}
