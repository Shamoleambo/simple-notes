export const createNote = (req, res) => {
  const { title, noteText } = req.body
  console.log(title, noteText)
}
