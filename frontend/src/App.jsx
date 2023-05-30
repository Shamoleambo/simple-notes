import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './Components/Header'
import NotesList from './Components/NotesList'

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const fetchNotes = async () => {
      const fetchedData = await fetch('http://localhost:5000/notes')
      const notes = await fetchedData.json()
      setNotes(notes)
    }

    fetchNotes()
  }, [])
  return (
    <main>
      <Header />
      <NotesList notes={notes} />
    </main>
  )
}

export default App
