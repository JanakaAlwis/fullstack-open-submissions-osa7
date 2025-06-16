const Anecdote = ({ anecdote, vote }) => {
  if (!anecdote) {
    return <p>Anecdote not found.</p>
  }

  return (
    <div>
      <h2>{anecdote.content} by {anecdote.author}</h2>
      <p>has {anecdote.votes} votes <button onClick={() => vote(anecdote.id)}>vote</button></p>
      <p>for more info see <a href={anecdote.info} target="_blank" rel="noreferrer">{anecdote.info}</a></p>
    </div>
  )
}

export default Anecdote
