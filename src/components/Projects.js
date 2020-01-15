import React, { useState, useEffect } from 'react'
import { API_ROOT } from '../services/api'
import ProjectCard from './ProjectCard'
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
      <h2 className='section-headers'>Projects</h2>
      <div className='ui cards'>
        {parseProjects()}
      </div>
    </>
  )
}

export default Projects
