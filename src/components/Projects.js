import React, { useState, useEffect } from 'react'
import { API_ROOT } from '../services/api'
import ProjectCard from './ProjectCard'
import { Card } from 'semantic-ui-react'
import '../App.css'

const Projects = () => {
  const [projects, setProjects] = useState([{
    id: 0,
    name: '',
    languages: '',
    description: '',
    visual: '',
    frontend_repo: '',
    backend_repo: '',
    url: ''
  }])

  const fetchProjects = () => {
    fetch(`${API_ROOT}projects`)
      .then(resp => resp.json())
      .then(setProjects)
  }

  useEffect(() => fetchProjects(), [])

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
