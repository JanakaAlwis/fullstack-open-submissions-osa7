import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BlogView = () => {
  const { id } = useParams()
  const blogs = useSelector(state => state.blogs)
  const blog = blogs.find(b => b.id === id)

  if (!blog) {
    return <div>Loading blog...</div>
  }

  return (
    <div>
      <h2>{blog.title} by {blog.author}</h2>
      <a href={blog.url} target="_blank" rel="noopener noreferrer">{blog.url}</a>
      <p>{blog.likes} likes</p>
      <p>added by {blog.user ? blog.user.name : 'unknown'}</p>
      {/* Comments could be rendered here in next steps */}
    </div>
  )
}

export default BlogView
