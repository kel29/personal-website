import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const BlogCard = (props) => {
  const { title, link, description, thumbnail } = props.blog

  return (
    <Card>
      <a href={link} target='blank'>
        <Image src={thumbnail} alt={title} width='100%' />
      </a>
      <Card.Content>
        <Card.Header>
          <div className='card-header'>
            {title}
          </div>
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Description>
          <div className="card-description">
            {description}
          </div>
        </Card.Description>
        <div className="card-meta">
          <a href={link}>Continue Reading...</a>
        </div>
      </Card.Content>
    </Card>
  )
}

export default BlogCard
