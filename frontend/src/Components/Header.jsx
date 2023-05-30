import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import NoteForm from './NoteForm'
import classes from './Header.module.css'

const Header = () => {
  const [formIsVisible, setFormIsVisible] = useState(false)

  function handleFormVisible() {
    setFormIsVisible(true)
  }

  function handleFormInvisible() {
    setFormIsVisible(false)
  }

  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.title}>Simple Notes</h1>
        <Button variant='outline-primary' size='lg' onClick={handleFormVisible}>
          Create Note
        </Button>
      </header>
      {formIsVisible && (
        <>
          <NoteForm onCancel={handleFormInvisible} />
        </>
      )}
    </>
  )
}

export default Header
