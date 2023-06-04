import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { projects } from "../graphql/queries.js";
import "../styles/projects.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import Details from "./Details.jsx";
export default function Projects(props) {
  const { loading, data } = useQuery(projects);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  console.log(show);
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      id="project"
      ref={props.carRef}
      className="bg-[#f5f5f5] pt-[100px] pb-[130px] overflow-hidden"
    >
      <div
        className="bold text-center text-3xl md:text-7xl text-header"
        data-aos="fade-left"
      >
        PROJECTS
      </div>

      <div className="bg-header w-[70px] h-1 m-auto mt-[25px] mb-[100px]"></div>

      <div>
        <ul className="flex justify-center m-auto text-text" data-aos="fade">
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
              <div className="projectsItem" key={item.id} >
                <img
                  src={item.projectCover.url}
                  alt={item.name}
                  className="h-[240px] w-[calc(50vw-8px)] sm:h-[300px] md:w-[390px] object-cover"
                />

                <div className="projectItemLink  whitespace-nowrap">
                  <div className="projectInfo">
                    <p>{item.name}</p>
                    <span>{item.tech}</span>
                  </div>
                  <div className="projectLink">
                    
                    <button
                      onClick={() => {
                        setShow(true), setId(item.id);
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
        <div>
          <div
            onClick={() => setShow(false)}
            className={`fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.6)] z-40 ${
              show ? "block" : "hidden"
            }`}
          ></div>
          <div
            className={`fixed top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] bg-white w-11/12 md:max-w-[700px]  z-50 ${
              show ? "block" : "hidden"
            }`}
          >
            {loading ? null : <Details id={id} show={show} setShow={setShow}/>}
          </div>
        </div>
      </div>
    </div>
  );
}
