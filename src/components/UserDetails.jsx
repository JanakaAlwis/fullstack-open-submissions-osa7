import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const UserDetails = () => {
  const { id } = useParams()
  const users = useSelector(state => state.users)
  const user = users.find(u => u.id === id)

  if (!user) {
    return <div>Loading user...</div> 
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>Added blogs</h3>
      <ul>
        {user.blogs && user.blogs.length > 0 ? (
          user.blogs.map(blog => (
            <li key={blog.id}>{blog.title}</li>
          ))
        ) : (
          <p>No blogs added</p>
        )}
      </ul>
    </div>
  )
}

export default UserDetails
