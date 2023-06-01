import React, {  useEffect } from "react";

export default function About(props) {

  return (
    <div className="pt-[100px] pb-[130px] max-w-[1200px] m-auto" id="about" ref={props.carRef} >
      <div className="bold text-center text-3xl md:text-7xl text-header" >ABOUT</div>
      <div className="bg-header w-[70px] h-1 m-auto mt-[25px] mb-[100px]" ></div>
      <div className="flex justify-center items-center  text-header" >
        <div className="flex flex-col lg:flex-row justify-center items-center px-[15px] text-text mt-5 mb-2">
          <div className="px-[10px]  h-60">
            <div className="hex-wrap m-auto">
              <div className="hexagon">
                <div className=" w-full h-full flex justify-center items-center z-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="z-10 w-14 h-14 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="text-center ">
              <p className="bold text-2xl mt-4 mb-1">Fast</p>
              <p className="text-xs sm:text-base">
                {" "}
                Fast load times and lag free interaction, my highest priority.{" "}
              </p>
            </div>
          </div>
          <div className="px-[10px] h-60">
            <div className="hex-wrap m-auto">
              <div className="hexagon">
                <div className=" w-full h-full flex justify-center items-center z-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="z-10 w-14 h-14 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="bold text-2xl mt-4 mb-1">Responsive</p>
              <p className="text-xs sm:text-base">
                {" "}
                My layouts will work on any device, big or small.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center px-[15px] text-text mt-5 mb-2">
          <div className="px-[10px] h-60">
            <div className="hex-wrap m-auto">
              <div className="hexagon">
                <div className=" w-full h-full flex justify-center items-center z-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="z-10 w-14 h-14 text-white"
                  >
                    <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
                    <path
                      fillRule="evenodd"
                      d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="bold text-2xl mt-4 mb-1"> Intuitive</p>
              <p className="text-xs sm:text-base">
                Strong preference for easy to use, intuitive UX/UI.
              </p>
            </div>
          </div>
          <div className="px-[10px] h-60">
            <div className="hex-wrap m-auto">
              <div className="hexagon">
                <div className=" w-full h-full flex justify-center items-center z-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="z-10 w-14 h-14 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                      clipRule="evenodd"
                    />
                    <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="bold text-2xl mt-4 mb-1">Dynamic</p>
              <p className="text-xs sm:text-base">
                {" "}
                Websites don't have to be static, I love making pages come to
                life.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="skills flex flex-col justify-center items-center lg:flex-row">
        <div className="flex flex-col  items-start justify-center w-full h-full px-[50px] mb-8  mx-8" >
          <div className="w-full flex justify-center">
            <div className="octagon"></div>
          </div>

          <div className="text-center text-text">
            <p className="bold  text-2xl mt-5 mb-4">who's this guy?</p>
            <p>
              I'm a Front-End Developer for ChowNow in Los Angeles, CA. I have
              serious passion for UI effects, animations and creating intuitive,
              dynamic user experiences. Let's make something special.
            </p>
          </div>
        </div>
        <div className="w-full  mb-8" >
          <ul className="flex flex-col justify-between h-full mx-8">
            <li className="relative bg-skilsBackgraound w-full  mb-4 flex items-center h-7 ">
              <div className="absolute left-0 top-0 h-full bg-blueSecondary w-11/12 ">
                <div className="skils">
                  <span>HTML</span>
                </div>
              </div>
            </li>
            <li className="relative bg-skilsBackgraound w-full  mb-4 flex items-center h-7 ">
              <div className="absolute left-0 top-0 h-full bg-blueSecondary w-11/12 ">
                <div className="skils">
                  <span>CSS</span>
                </div>
              </div>
            </li>
            <li className="relative bg-skilsBackgraound w-full  mb-4 flex items-center h-7 ">
              <div className="absolute left-0 top-0 h-full bg-blueSecondary w-10/12">
                <div className=" skils ">
                  <span>SASS</span>
                </div>
              </div>
            </li>
            <li className="relative bg-skilsBackgraound w-full  mb-4 flex items-center h-7 ">
              <div className="absolute left-0 top-0 h-full bg-blueSecondary w-10/12 ">
                <div className="skils">
                  <span>Tailwind</span>
                </div>
              </div>
            </li>
            <li className="relative bg-skilsBackgraound w-full  mb-4 flex items-center h-7 ">
              <div className="absolute left-0 top-0 h-full bg-blueSecondary w-10/12 ">
                <div className="skils">
                  <span>JavaScript</span>
                </div>
              </div>
            </li>
            <li className="relative bg-skilsBackgraound w-full  mb-4 flex items-center h-7 ">
              <div className="absolute left-0 top-0 h-full bg-blueSecondary w-10/12 ">
                <div className="skils">
                  <span>Jquery</span>
                </div>
              </div>
            </li>
            <li className="relative bg-skilsBackgraound w-full  mb-4 flex items-center h-7 ">
              <div className="absolute left-0 top-0 h-full bg-blueSecondary w-9/12 ">
                <div className="skils">
                  <span>React</span>
                </div>
              </div>
            </li>
            <li className="relative bg-skilsBackgraound w-full  mb-4 flex items-center h-7 ">
              <div className="absolute left-0 top-0 h-full bg-blueSecondary w-8/12 ">
                <div className="skils">
                  <span>Redux</span>
                </div>
              </div>
            </li>
            <li className="relative bg-skilsBackgraound w-full  mb-4 flex items-center h-7 ">
              <div className="absolute left-0 top-0 h-full bg-blueSecondary w-8/12 ">
                <div className="skils">
                  <span>GraphQL</span>
                </div>
              </div>
            </li>
            <li className="relative bg-skilsBackgraound w-full  mb-4 flex items-center h-7 ">
              <div className="absolute left-0 top-0 h-full bg-blueSecondary w-8/12 ">
                <div className="skils">
                  <span>RestApi</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
