import React from 'react'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Container } from 'semantic-ui-react'
import './App.css'

function App () {
  return (
    <Container>
      <AboutMe />
      <Projects />
      <Contact />
    </Container>
  )
}

export default App
