import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import ROUTES from '../../routes'

export default function Navbar() {
  return (
    <header>
        <div className="logo">
            <Link href="/">
                Logo
            </Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to={ROUTES.HOME}>Home</Link>
                </li>
                <li>
                    <Link to={ROUTES.BLOG}>Blog</Link>
                </li>
                <li>
                    <Link to={ROUTES.POSTS}>Posts</Link>
                </li>
                <li>
                    <Link to={ROUTES.CONTACT}>Contact</Link>
                </li>
                <li>
                    <Link to={ROUTES.USERS}>Users</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
