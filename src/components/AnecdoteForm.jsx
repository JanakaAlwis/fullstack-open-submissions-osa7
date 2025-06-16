import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useField } from '../hooks'

const AnecdoteForm = () => {
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const anecdote = {
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    }

    dispatch(createAnecdote(anecdote))
    dispatch(setNotification(`Anecdote '${anecdote.content}' created`, 5))
    navigate('/')
  }

  const resetForm = () => {
    content.reset()
    author.reset()
    info.reset()
  }

  const inputProps = ({ reset, ...props }) => props

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...inputProps(content)} />
        </div>
        <div>
          author
          <input {...inputProps(author)} />
        </div>
        <div>
          url for more info
          <input {...inputProps(info)} />
        </div>
        <button type="submit">create</button>
        <button type="button" onClick={resetForm}>reset</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
