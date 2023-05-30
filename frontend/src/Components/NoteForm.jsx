import Form from 'react-bootstrap/Form'
import classes from './NoteForm.module.css'

const NoteForm = ({ onBackdropClick }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onBackdropClick}></div>
      <Form className={classes.form}>
        <div className={classes.formControlHeader}>
          <h1>Create Your Note</h1>
          <p>Give it a title and some text</p>
        </div>
        <Form.Group controlId='title' className='mb-4'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' placeholder='Give your note a title' />
        </Form.Group>
        <Form.Group controlId='noteText'>
          <Form.Label>Note Content</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Note content'
            style={{ height: '10rem' }}
          />
        </Form.Group>
      </Form>
    </>
  )
}

export default NoteForm
