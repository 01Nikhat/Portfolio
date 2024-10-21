import { useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import Intro from './components/Introduction/Intro'
import Skills from './components/Skills/skills'
import AboutMe from './components/AboutMe/AboutMe'

function App() {
  

  return (
   <div className='App'>
    <Navbar />
    <Intro />
    <AboutMe />
    <Skills />
   </div>
  )
}

export default App
