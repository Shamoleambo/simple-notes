import Note from './Note'

const NotesList = ({ notes }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <Note key={index} title={note.title} noteText={note.noteText} />
      ))}
    </ul>
  )
}

export default NotesList
