import { useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import Intro from './components/Introduction/Intro'
import Skills from './components/Skills/skills'
import AboutMe from './components/AboutMe/AboutMe'
import Project from './components/Projects/Project'

function App() {
  

  return (
   <div className='App'>
    <Navbar />
    <Intro />
    <AboutMe />
    <Project />
    <Skills />
   </div>
  )
}

export default App
