import React, { createRef, forwardRef, useRef } from 'react'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'



const  App = () =>{
const aboutSection = createRef()
const projectSection = createRef()
const contactSection = createRef()
  return (
    <>
      <Home about = {aboutSection} project = {projectSection} contact={contactSection}/>
      <About carRef = {aboutSection}/>
      <Projects carRef = {projectSection}/>
      <Contact carRef = {contactSection}/>
      <Footer/>
    </>
  )
}

export default App
