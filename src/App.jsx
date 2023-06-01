import React, { forwardRef, useRef } from 'react'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'



const  App = () =>{

  return (
    <>
      <Home />
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
