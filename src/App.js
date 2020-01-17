import React from 'react'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import { Container } from 'semantic-ui-react'
import './App.css'

function App () {
  return (
    <Container>
      <AboutMe />
      <Projects />
      <Blogs />
      <Contact />
    </Container>
  )
}

export default App
