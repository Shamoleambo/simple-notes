import Note from './Note'
import classes from './NotesList.module.css'

const NotesList = ({ notes }) => {
  return (
    <ul className={classes.notesList}>
      {notes.map((note, index) => (
        <Note key={index} title={note.title} noteText={note.noteText} />
      ))}
    </ul>
  )
}

export default NotesList
