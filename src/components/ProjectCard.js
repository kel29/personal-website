import React from 'react'
import { Card } from 'semantic-ui-react'

const ProjectCard = (props) => {
  const { name, technologies, description, frontend_repo, backend_repo, demo, hosted } = props.project

  return (
    <Card>
      <iframe
        width='100%'
        height='100%'
        src={demo}
        title={name}
        className='video'
      />
      <Card.Content>
        <Card.Header>
          <div className='card-header'>
            {name}
          </div>
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Meta>
          <span className="card-meta">
            {technologies}
            {hosted && <span> | <a href={hosted}>Hosted</a></span>}
            {frontend_repo && <span> | <a href={frontend_repo}>Frontend</a></span>}
            {backend_repo && <span> | <a href={backend_repo}>Backend</a></span>}
          </span>
        </Card.Meta>
        <Card.Description>
          <div className="card-description">
            {description}
          </div>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default ProjectCard
