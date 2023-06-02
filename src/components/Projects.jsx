import React,{useEffect} from "react";
import { useQuery } from "@apollo/client";
import { projects } from "../graphql/queries.js";
import "../styles/projects.scss";
import Aos from "aos";
import 'aos/dist/aos.css'
export default function Projects(props) {
  const { loading, data } = useQuery(projects);
  useEffect(()=>{
    Aos.init({
    duration:1000
    })
    },[])
  return (
    <div
      id="project"
      ref={props.carRef}
      className="bg-[#f5f5f5] pt-[100px] pb-[130px] overflow-hidden"
    >
      <div className="bold text-center text-3xl md:text-7xl text-header" data-aos = "fade-left">
        PROJECTS
      </div>

      <div className="bg-header w-[70px] h-1 m-auto mt-[25px] mb-[100px]"></div>

      <div>
        <ul className="flex justify-center m-auto text-text" data-aos = "fade">
          <li className="cursor-pointer mx-6 px-5 md:px-10 text-xs md:text-base font-semibold bg-highlight text-white">
            ALL
          </li>
          <li className="cursor-pointer mx-6 px-5 md:px-10 text-xs md:text-base font-semibold">
            JS
          </li>
          <li className="cursor-pointer mx-6 px-5 md:px-10 text-xs md:text-base font-semibold">
            ReactJS
          </li>
        </ul>
      </div>
      <div className="flex flex-col flex-wrap items-center sm:flex-row justify-center mt-6 max-w-[1200px] mx-auto">
        {loading
          ? ""
          : data.projects.map((item) => (
              <div className="projectsItem" key={item.id} data-aos = "zoom-in">
                <img
                  src={item.projectCover.url}
                  alt=""
                  className="h-[240px] w-[calc(50vw-8px)] sm:h-[300px] md:w-[390px] object-cover"
                />

                <div className="projectItemLink  whitespace-nowrap" >
                  <div className="projectInfo">
                    <p>{item.name}</p>
                    <span>{item.tech}</span>
                  </div>
                  <div className="projectLink">
                    <a href={item.url}>See More</a>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
