import classes from './Note.module.css'

const Note = ({ title, noteText }) => {
  return (
    <li className={classes.noteItem}>
      <h1 className={classes.noteTitle}>{title}</h1>
      <p className={classes.noteContent}>{noteText}</p>
    </li>
  )
}

export default Note
