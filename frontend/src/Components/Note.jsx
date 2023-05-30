const Note = ({ title, noteText }) => {
  return (
    <li>
      <h1>{title}</h1>
      <p>{noteText}</p>
    </li>
  )
}

export default Note
