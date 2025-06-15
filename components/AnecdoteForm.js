const AnecdoteForm = (props) => {
  const content = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.inputProps.value,
      votes: 0
    })
  }

  const handleReset = () => {
    content.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        content <input {...content.inputProps} />
      </div>
      <button>create</button>
      <button type="button" onClick={handleReset}>reset</button>
    </form>
  )
}
