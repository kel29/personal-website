import React from 'react'
import { Card } from 'semantic-ui-react'

const ProjectCard = (props) => {
  const { name, technologies, description, frontend_repo, backend_repo, demo, hosted } = props.project

  return (
    <Card>
      <iframe
        width='100%'
        src={demo}
      />
      <Card.Content>
        <Card.Header>
          {name}
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Meta>
          {technologies}
        </Card.Meta>
        <div>
          {hosted ? <span><a href={hosted}>Hosted </a> | </span> : null}
          {frontend_repo ? <span><a href={frontend_repo}>Frontend </a> | </span> : null}
          {backend_repo ? <a href={backend_repo}>Backend</a> : null}
        </div>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default ProjectCard
