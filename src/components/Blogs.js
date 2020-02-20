import React from 'react'
import { blogs } from '../services/blogs'
import BlogCard from './BlogCard'
import { Card, Container } from 'semantic-ui-react'
import '../App.css'

const Blogs = () => {
  const parseBlogs = () => {
    return blogs.map(blog => {
      return <BlogCard key={blog.id} blog={blog} />
    })
  }

  return (
    <div className="content">
      <Container>
        {blogs[0].id ? <h2 className='section-headers'>Blog Posts</h2> : null}
        <Card.Group stackable doubling itemsPerRow={3}>
          {blogs[0].id ? parseBlogs() : null}
        </Card.Group>
      </Container>
    </div>
  )
}

export default Blogs
