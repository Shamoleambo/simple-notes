import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import classes from './NoteForm.module.css'

const NoteForm = ({ onCancel, onSubmit, titleInput, noteTextInput }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onCancel}></div>
      <Form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.formControlHeader}>
          <h1>Create Your Note</h1>
          <p>Give it a title and some text</p>
        </div>
        <Form.Group controlId='title' className='mb-4'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Give your note a title'
            ref={titleInput}
          />
        </Form.Group>
        <Form.Group controlId='noteText'>
          <Form.Label>Note Content</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Note content'
            ref={noteTextInput}
            style={{ height: '10rem' }}
          />
        </Form.Group>
        <div className={classes.buttons}>
          <Button
            className={classes.button}
            variant='primary'
            type='submit'
            size='lg'
          >
            Create Note
          </Button>
          <Button
            className={classes.button}
            variant='danger'
            type='button'
            size='lg'
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </>
  )
}

export default NoteForm
