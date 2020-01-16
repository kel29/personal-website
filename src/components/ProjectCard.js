import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ProjectCard = (props) => {
  const { name, languages, description, frontend_repo, backend_repo, url } = props.project

  return (
    <Card>
      {/* <Image src={placeholder} alt='project visual' /> */}
      <Card.Content>
        <Card.Header>
          {name}
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Meta>
          {languages}
        </Card.Meta>
        <div>
          {url ? <span><a href={url}>Demo </a> | </span> : null}
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
