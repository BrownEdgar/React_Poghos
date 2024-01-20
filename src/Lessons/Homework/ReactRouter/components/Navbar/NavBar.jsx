import {} from 'react'
import { Link, NavLink } from 'react-router-dom'
import ROUTES from '../../routes'
import './NavBar.scss'

export default function NavBar() {
  return (
    <header>
        <div className="logo">
            <Link to={ROUTES.HOME}>Logo</Link>
        </div>
        <nav>
    <ul>
        <li><NavLink to={ROUTES.HOME}>Home</NavLink></li>
        <li><NavLink to={ROUTES.BLOG}>Blog</NavLink></li>
        <li><NavLink to={ROUTES.POSTS}>Posts</NavLink></li>
        <li><NavLink to={ROUTES.CONTACT}>Contact</NavLink></li>
        <li><NavLink to={ROUTES.USERS}>Users</NavLink></li>
    </ul>
        </nav>
    </header>
  )
}
