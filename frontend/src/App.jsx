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
      console.log('fetchNotes', fetchNotes)
      console.log('fetched notes', notes)
      setNotes(notes)
    }

    console.log('state', notes)

    fetchNotes()
  }, [])
  return (
    <main>
      <Header />
      <NotesList />
    </main>
  )
}

export default App
