import Button from 'react-bootstrap/Button'
import NoteForm from './NoteForm'
import classes from './Header.module.css'

const Header = ({
  onSubmit,
  onFormVisible,
  onFormInvisible,
  formIsVisible,
  titleInput,
  noteTextInput
}) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.title}>Simple Notes</h1>
        <Button variant='outline-primary' size='lg' onClick={onFormVisible}>
          Create Note
        </Button>
      </header>
      {formIsVisible && (
        <>
          <NoteForm
            onSubmit={onSubmit}
            onCancel={onFormInvisible}
            titleInput={titleInput}
            noteTextInput={noteTextInput}
          />
        </>
      )}
    </>
  )
}

export default Header
