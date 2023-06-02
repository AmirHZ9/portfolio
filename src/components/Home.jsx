import React, { useEffect, useState } from "react";
// BackGround
import backGround from "../assets/background.jpg";
import "../styles/home.scss";
export default function Home({ about, contact, project }) {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 1000) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
  });
  const showMenu = () => {
    setHamburgerMenu(!hamburgerMenu);
  };
  const scrollToTopic = (event) => {
    const name = event.target.attributes.name.value;
    switch (name) {
      case "home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "work":
        about.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        about.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "project":
        project.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contact.current.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };
  return (
    <div className="h-[100vh] relative">
      <img
        src={backGround}
        alt="background"
        className="h-full w-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
        <div className="mb-5">
          <p className="text-xl sm:text-4xl text-white text-center whitespace-nowrap">
            Hello, I'm
            <span className=" name text-highlight ml-3">
              Amirhossein Zanganeh
            </span>
            .
            <br />
            I'm a Frontend web developer.
          </p>
        </div>
        <div className=" text-center">
          <button
            name="work"
            onClick={scrollToTopic}
            className="viewWork border-2 text-white py-3 px-5 hover:bg-bluePrimary hover:border-bluePrimary flex m-auto duration-300 outline-none"
          >
            View my Work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="arrowRight w-6 h-6 ml-4"
              name="work"
              onClick={scrollToTopic}
            >
              <path
                fillRule="evenodd"
                d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`bg-nav border-b-4 border-bluePrimary h-[50px] ${
          show ? "fixed top-0 left-0  w-screen z-50" : "relative"
        }`}
      >
        <ul className="hidden  md:flex  items-center  max-w-7xl h-full text-white">
          <li
            className={`mx-5 cursor-pointer hover:text-highlight duration-300 `}
            name="home"
            onClick={scrollToTopic}
          >
            HOME
          </li>
          <li
            className={`mx-5 cursor-pointer hover:text-highlight duration-300 `}
            name="about"
            onClick={scrollToTopic}
          >
            ABOUT
          </li>
          <li
            className={`mx-5 cursor-pointer hover:text-highlight duration-300 `}
            name="project"
            onClick={scrollToTopic}
          >
            PROJECT
          </li>
          <li
            className={`mx-5 cursor-pointer hover:text-highlight duration-300 `}
            name="contact"
            onClick={scrollToTopic}
          >
            CONTACT
          </li>
        </ul>
        <div
          onClick={showMenu}
          className=" absolute  top-1/2 right-2 translate-y-[-50%]  cursor-pointer md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div>
          <ul
            className={`max-w-7xl text-white absolute top-[50px] w-full  items-center  bg-[#333] duration-300 overflow-hidden ${
              hamburgerMenu ? " h-[160px]" : "h-0 "
            } md:hidden`}
          >
            <li
              onClick={scrollToTopic}
              name="home"
              className="mx-5 my-3 cursor-pointer hover:text-highlight duration-300"
            >
              HOME
            </li>
            <li
              onClick={scrollToTopic}
              name="about"
              className="mx-5 my-3 cursor-pointer hover:text-highlight duration-300"
            >
              ABOUT
            </li>
            <li
              onClick={scrollToTopic}
              name="project"
              className="mx-5 my-3 cursor-pointer hover:text-highlight duration-300"
            >
              PROJECT
            </li>
            <li
              onClick={scrollToTopic}
              name="contact"
              className="mx-5 my-3 cursor-pointer hover:text-highlight duration-300"
            >
              CONTACT
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
