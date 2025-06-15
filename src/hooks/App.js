import React, { useState } from 'react'
import Country from './components/Country'
import useCountry from './hooks/useCountry'
import { useField } from './hooks'
import { useResource } from './hooks/useResource'

const App = () => {
  // Country lookup
  const countryName = useField('text')
  const [query, setQuery] = useState('')
  const country = useCountry(query)

  const search = (e) => {
    e.preventDefault()
    setQuery(countryName.value)
  }

  // Notes & Persons
  const noteContent = useField('text')
  const personName = useField('text')
  const personNumber = useField('text')

  const [notes, noteService] = useResource('http://localhost:3005/notes')
  const [persons, personService] = useResource('http://localhost:3005/persons')

  const handleNoteSubmit = (e) => {
    e.preventDefault()
    noteService.create({ content: noteContent.value })
    noteContent.reset()
  }

  const handlePersonSubmit = (e) => {
    e.preventDefault()
    personService.create({ name: personName.value, number: personNumber.value })
    personName.reset()
    personNumber.reset()
  }

  return (
    <div>
      <h2>Find country</h2>
      <form onSubmit={search}>
        <input {...countryName.inputProps} />
        <button>find</button>
      </form>
      <Country country={country} />

      <h2>Notes</h2>
      <form onSubmit={handleNoteSubmit}>
        <input {...noteContent.inputProps} />
        <button>create</button>
      </form>
      {notes.map(n => <p key={n.id}>{n.content}</p>)}

      <h2>Persons</h2>
      <form onSubmit={handlePersonSubmit}>
        name <input {...personName.inputProps} /><br />
        number <input {...personNumber.inputProps} />
        <button>create</button>
      </form>
      {persons.map(p => <p key={p.id}>{p.name} {p.number}</p>)}
    </div>
  )
}

export default App
