import React from 'react'

const ProjectCard = (props) => {
  const { name, languages, description } = props.project
  return (
    <div className='ui card'>
      <div className='content'>
        <div className='header'>
          {name}
        </div>
        <div className='meta'>
          {languages}
        </div>
        <div className='description'>
          {description}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
