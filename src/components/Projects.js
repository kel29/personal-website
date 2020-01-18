import React from 'react'
import ProjectCard from './ProjectCard'
import { Card } from 'semantic-ui-react'
import { projects } from '../services/projects'
import '../App.css'

const Projects = () => {
  const parseProjects = () => {
    return projects.map(project => {
      return <ProjectCard key={project.id} project={project} />
    })
  }

  return (
    <>
      {projects[0].id ? <h2 className='section-headers'>Projects</h2> : null}
      <Card.Group stackable doubling itemsPerRow={3}>
        {projects[0].id ? parseProjects() : null}
      </Card.Group>
    </>
  )
}

export default Projects
