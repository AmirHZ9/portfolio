import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { sendMessage } from "../graphql/mutation";
import Aos from "aos";
import 'aos/dist/aos.css'
export default function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [Error, setError] = useState(true);

  const [sendEmail, { loading, data, error }] = useMutation(sendMessage, {
    variables: {
      name: name,
      email: email,
      text: text,
    },
  });
  const sendHandler = () => {
    if (name && email && text) {
      sendEmail();
      setError(false);
      setEmail("");
      setName("");
      setText("");
    } else {
      setError(true);
    }
  };
  useEffect(()=>{
    Aos.init({
    duration:1000
    })
    },[])
  return (
    <div
      id="contact"
      ref={props.carRef}
      className="flex flex-col justify-center w-full items-center overflow-hidden  bg-contact text-white mx-auto pt-[175px] pb-[130px]"
    >
      <div className="flex flex-col justify-center w-full max-w-[1200px] items-center  mx-auto ">
        <div className="bold text-center text-5xl " data-aos="fade-left">CONTACT</div>
        <div className="bg-white w-[110px] h-1 m-auto mt-[25px] mb-10"></div>
        <div className="text-bluePrimary font-semibold text-center "  data-aos="fade-right">
          Have a question or want to work together?
        </div>
        <div className=" mt-10 mx-auto min-w-[95%] sm:min-w-[500px]"  data-aos="fade-up">
          <input
            type="text"
            placeholder="Name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
            className="py-2 px-4 w-full  block outline-none bg-inputbg mb-2"
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="py-2 px-4 w-full  block outline-none bg-inputbg mb-2"
          />
          <textarea
            name="text"
            id=""
            cols="20"
            rows="7"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            placeholder="Your Message"
            className="py-2 px-4  w-full block outline-none bg-inputbg mb-2"
          ></textarea>
          {Error == false && (
            <div className="text-sm text-bluePrimary">
              Your Message send Successfuly.
            </div>
          )}
          <button
            className="border-2 block px-7 py-2 float-right hover:bg-bluePrimary hover:border-bluePrimary duration-300"
            onClick={sendHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
