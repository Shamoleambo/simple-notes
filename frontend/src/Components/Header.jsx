import Button from 'react-bootstrap/Button'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Simple Notes</h1>
      <Button variant='outline-primary' size='lg'>
        Create Note
      </Button>
    </header>
  )
}

export default Header
