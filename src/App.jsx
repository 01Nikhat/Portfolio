import { useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import Intro from './components/Introduction/Intro'
import Skills from './components/Skills/skills'
import AboutMe from './components/AboutMe/AboutMe'
import Project from './components/Projects/Project'
import Contact from './components/Contact/Contact'

function App() {
  

  return (
    <div>
      <Navbar /> {/* Navbar remains at the top */}
      
      {/* Section for Home */}
      <section id="home">
        <Intro />  {/* This is your Home or Intro section */}
      </section>
      
      {/* Section for About */}
      <section id="about">
        <AboutMe /> {/* This is your About section */}
      </section>

      {/* Section for Skills */}
      <section id="skills">
        <Skills /> {/* This is your Skills section */}
      </section>

      {/*  Projects, Experience, etc. */}
      <section id='project'>
        <Project />
      </section>
      {/*  Contact */}
      <section id='contact'>
        <Contact />
      </section>
      
    </div>
  )
}

export default App
