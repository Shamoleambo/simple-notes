import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Simple Notes</h1>
      <button>Create Note</button>
    </header>
  )
}

export default Header
