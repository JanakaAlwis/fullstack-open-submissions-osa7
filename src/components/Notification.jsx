const Notification = ({ message }) => {
  if (!message) return null

  const style = {
    border: 'solid 2px',
    padding: 10,
    marginBottom: 10,
    color: 'green',
    backgroundColor: '#ddffdd',
    fontWeight: 'bold',
  }

  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification
