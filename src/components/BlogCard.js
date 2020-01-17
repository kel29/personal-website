import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const BlogCard = (props) => {
  const { title, link, description, thumbnail } = props.blog

  return (
    <Card>
      <a href={link} target='blank'>
        <Image src={thumbnail} alt={title} />
      </a>
      <Card.Content>
        <Card.Header>
          {title}
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Description>
          {description}
        </Card.Description>
        <div>
          <a href={link}>Continue Reading</a>
        </div>
      </Card.Content>
    </Card>
  )
}

export default BlogCard
