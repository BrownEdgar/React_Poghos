import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'
import ROUTES from '../../routes'

export default function NavBar() {
  return (
    <header>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <nav>
        <ul>
        <li>
            <NavLink to={ROUTES.SIGNIN}>Sign In</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.SIGNUP}>Sign Up</NavLink>
          </li>
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
