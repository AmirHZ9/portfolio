import React from "react";
// BackGround
import backGround from "../assets/background.png";
import "../styles/home.scss";
export default function Home() {
  return (
    <div className="h-screen relative">
      <img
        src={backGround}
        alt="background"
        className="h-full w-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
        <div className="mb-5">
          <p className="text text-4xl text-white text-center">
            Hello, I'm
            <span className=" name text-highlight ml-3">
              Amirhossein Zanganeh
            </span>
            .
            <br />
            I'm a Frontend web developer.
          </p>
        </div>
        <div className="viewWork text-center ">
          <button className="text border-2 text-white py-3 px-5 hover:bg-bluePrimary hover:border-bluePrimary flex m-auto duration-300">
            View my Work
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="arrowRight w-6 h-6 ml-4">
            <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
            </button>
        </div>
      </div>
      <div className="bg-nav border-b-4 border-bluePrimary h-[50px]">
        <ul className="text flex w-100  items-center max-w-7xl h-full text-white">
            <li className="mx-20 cursor-pointer hover:text-highlight duration-300">HOME</li>
            <li className="mx-20 cursor-pointer hover:text-highlight duration-300">ABOUT</li>
            <li className="mx-20 cursor-pointer hover:text-highlight duration-300">PROJECT</li>
            <li className="mx-20 cursor-pointer hover:text-highlight duration-300">CONTACT</li>
        </ul>

      </div>
    </div>
  );
}
