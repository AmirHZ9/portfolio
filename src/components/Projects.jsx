import React from 'react'

import { useQuery } from '@apollo/client'
import {projects} from "../graphql/queries.js"
export default function Projects() {
const {loading , data , error} = useQuery(projects)
console.log({data})
  return (
    <div className='bg-[#f5f5f5] pt-[100px] pb-[130px]'>
        <div className='bold text-center text-7xl text-header'>PROJECTS</div>
      <div className="bg-header w-[70px] h-1 m-auto mt-[25px] mb-[100px]"></div>
   <div>
    <ul className='flex justify-center text-text'>
        <li className='cursor-pointer mx-6 px-10 font-semibold bg-highlight text-white'>ALL</li>
        <li className='cursor-pointer mx-6 px-10 font-semibold'>JS</li>
        <li className='cursor-pointer mx-6 px-10 font-semibold'>ReactJS</li>
    </ul>
   </div>
      {
        loading ? "" :
        data.projects.map(item =>

          <div key={item.id}>
          <a href={item.url}>

              <img src={item.projectCover.url} alt=""  className="w-80"/>
          </a>
          </div>
            )
          
      }
    </div>
  )
}
