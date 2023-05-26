import Note from '../model/Note.js'

export const createNote = async (req, res) => {
  const { title, noteText } = req.body

  const note = new Note()
  note.title = title
  note.noteText = noteText

  const createdNote = await note.save()
  res.status(201).json(createdNote)
}
