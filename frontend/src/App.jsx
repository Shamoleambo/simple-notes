import { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './Components/Header'
import NotesList from './Components/NotesList'

function App() {
  const [notes, setNotes] = useState([])
  const titleInput = useRef('')
  const noteTextInput = useRef('')

  useEffect(() => {
    const fetchNotes = async () => {
      const fetchedData = await fetch('http://localhost:5000/notes')
      const notes = await fetchedData.json()
      setNotes(notes)
    }

    fetchNotes()
  }, [])

  function handleSubmit(event) {
    event.preventDefault()

    const postData = {
      title: titleInput.current.value,
      noteText: noteTextInput.current.value
    }

    fetch('http://localhost:5000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
  }

  return (
    <main>
      <Header
        onSubmit={handleSubmit}
        titleInput={titleInput}
        noteTextInput={noteTextInput}
      />
      <NotesList notes={notes} />
    </main>
  )
}

export default App
