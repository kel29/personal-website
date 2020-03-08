import React from 'react'
import { blogs } from '../services/blogs'
import BlogCard from './BlogCard'
import { Card, Container } from 'semantic-ui-react'
import '../App.css'

const Blogs = () => {
  const parseBlogs = () => {
    return blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)
  }

  return (
    <div className="content blogs">
      <Container>
        <h2 className='section-headers'><a href='https://medium.com/@krista.loven.87' target='blank'>BLOG POSTS</a></h2>
        <Card.Group stackable doubling itemsPerRow={3}>
          {parseBlogs()}
        </Card.Group>
      </Container>
    </div>
  )
}

export default Blogs
