import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'
import ROUTES from '../../routes'
import { useState } from 'react'

export default function NavBar() {
  const [login, setLogin] = useState(window.localStorage.getItem('login'))

  const logout = () => {
    localStorage.setItem('login', false);
    setLogin(false)
  }

  return (
    <header>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <nav>
        <ul>
          {login ? <button onClick={logout}>LogOut</button> : (
            <>
              <li>
                <NavLink to={ROUTES.SIGNIN}>Sign In</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.SIGNUP}>Sign Up</NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to={ROUTES.USERS}>Users</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.BLOG}>Blog</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.POSTS}>Posts</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
