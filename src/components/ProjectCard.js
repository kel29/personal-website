import React from 'react'

const ProjectCard = (props) => {
  const { name, languages, description, frontend_repo, backend_repo, url } = props.project

  return (
    <div className='ui card fluid'>
      <div className='content'>
        <div className='header'>
          {name}
        </div>
      </div>
      <div className='content'>
        <div className='meta'>
          {languages}
        </div>
        <div>
          {url ? <span><a href={url}>Demo </a> | </span> : null}
          {frontend_repo ? <span><a href={frontend_repo}>Frontend </a> | </span> : null}
          {backend_repo ? <a href={backend_repo}>Backend</a> : null}
        </div>
        <div className='description'>
          {description}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
