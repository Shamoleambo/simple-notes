const NoteForm = () => {
  return (
    <form>
      <h1>Create Your Note</h1>
      <p>Give it a title and some text</p>
      <div className='form-control'>
        <label htmlFor='title' name='title'>
          Title
        </label>
        <input id='title' type='text' />
      </div>
      <label htmlFor='noteText'>Note Content</label>
      <textarea id='noteText' rows='4' name='noteText'></textarea>
    </form>
  )
}

export default NoteForm
