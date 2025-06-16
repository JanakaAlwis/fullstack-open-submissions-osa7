import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AnecdoteList = () => {
  const blogs = useSelector(state => state.blogs)

  const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes)

  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {sortedBlogs.map(blog => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link> by {blog.author}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnecdoteList
