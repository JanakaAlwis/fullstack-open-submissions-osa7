import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addAnecdote } from './reducers/anecdoteReducer'
import { showNotification } from './reducers/notificationReducer'

const Menu = () => {
  const padding = {
    paddingRight: 5,
  }
  return (
    <div>
      <Link to="/" style={padding}>
        anecdotes
      </Link>
      <Link to="/create" style={padding}>
        create new
      </Link>
      <Link to="/about" style={padding}>
        about
      </Link>
    </div>
  )
}

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes)
  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map((anecdote) => (
          <li key={anecdote.id}>
            <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Anecdote = () => {
  const { id } = useParams()
  const anecdotes = useSelector((state) => state.anecdotes)
  const anecdote = anecdotes.find((a) => a.id === Number(id))

  if (!anecdote) {
    return <p>Anecdote not found</p>
  }

  return (
    <div>
      <h2>
        {anecdote.content} by {anecdote.author}
      </h2>
      <p>has {anecdote.votes} votes</p>
      <p>
        for more info see <a href={anecdote.info}>{anecdote.info}</a>
      </p>
    </div>
  )
}

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>
    <em>
      An anecdote is a brief, revealing account of an individual person or an
      incident... An anecdote is "a story with a point."
    </em>
    <p>
      Software engineering is full of excellent anecdotes, at this app you can
      find the best and add more.
    </p>
  </div>
)

const Footer = () => (
  <div>
    Anecdote app for <a href="https://fullstackopen.com/">Full Stack Open</a>.
    <br />
    See{' '}
    <a href="https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js">
      source code
    </a>
    .
  </div>
)

const Notification = () => {
  const notification = useSelector((state) => state.notification)
  if (!notification) return null
  return (
    <div style={{ border: '1px solid green', padding: 10, marginBottom: 10 }}>
      {notification}
    </div>
  )
}

const CreateNew = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [info, setInfo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newAnecdote = {
      content,
      author,
      info,
      votes: 0,
      id: Math.round(Math.random() * 10000),
    }
    dispatch(addAnecdote(newAnecdote))
    dispatch(showNotification(`A new anecdote "${content}" created!`, 5))
    navigate('/')
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          author
          <input
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          url for more info
          <input
            name="info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <div>
        <h1>Software anecdotes</h1>
        <Menu />
        <Notification />
        <Routes>
          <Route path="/" element={<AnecdoteList />} />
          <Route path="/create" element={<CreateNew />} />
          <Route path="/about" element={<About />} />
          <Route path="/anecdotes/:id" element={<Anecdote />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
