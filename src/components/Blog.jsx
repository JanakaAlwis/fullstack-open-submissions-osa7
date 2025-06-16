import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { initializeComments, createComment } from '../reducers/commentsReducer'
import { useState } from 'react'

const Blog = ({ blogs, likeBlog }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const blog = blogs.find(b => b.id === id)
  const comments = useSelector(state => state.comments[id] || [])

  const [comment, setComment] = useState('')

  useEffect(() => {
    if (blog) {
      dispatch(initializeComments(blog.id))
    }
  }, [dispatch, blog])

  const handleCommentSubmit = (event) => {
    event.preventDefault()
    if (comment.trim()) {
      dispatch(createComment(blog.id, comment))
      setComment('')
    }
  }

  if (!blog) return <div>Loading...</div>

  return (
    <div>
      <h2>{blog.title} by {blog.author}</h2>
      <a href={blog.url}>{blog.url}</a>
      <div>{blog.likes} likes <button onClick={() => likeBlog(blog)}>like</button></div>
      <div>added by {blog.user.name}</div>

      <h3>Comments</h3>
      <form onSubmit={handleCommentSubmit}>
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">add comment</button>
      </form>

      <ul>
        {comments.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  )
}

export default Blog
