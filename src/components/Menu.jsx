import { NavLink } from 'react-router-dom'

const Menu = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'blue',
    textDecoration: 'underline',
  }

  const linkStyle = {
    padding: 5,
    textDecoration: 'none',
    color: 'black',
  }

  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        end
      >
        Anecdotes
      </NavLink>
      <NavLink
        to="/create"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        Create New
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        About
      </NavLink>
    </nav>
  )
}

export default Menu
