import React from 'react'
import ProjectCard from './ProjectCard'
import { Card, Container } from 'semantic-ui-react'
import { projects } from '../services/projects'
import '../App.css'

const Projects = () => {
  const parseProjects = () => {
    return projects.map(project => <ProjectCard key={project.id} project={project} />)
  }

  return (
    <div className="content">
      <Container>
        <h2 className='section-headers'>Projects</h2>
        <Card.Group stackable doubling itemsPerRow={3}>
          {parseProjects()}
        </Card.Group>
      </Container>
    </div>
  )
}

export default Projects
