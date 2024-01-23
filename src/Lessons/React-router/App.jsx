import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import PrivateRoutes from './components/Navbar/PrivateRoutes/PrivateRoutes'
import { Blog, Contact, Errorpage, Home, Post, Posts, SignIn, SignUp, Users } from './pages';
import ROUTES from './routes'

import './App.scss'

export default function App() {
  const [users, setUsers] = useState([{
    id: 100500,
    email: 'admin@gmail.com',
    password: 'admin',
    username: 'admin',
  }])
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={ROUTES.SIGNIN} element={<SignIn users={users} />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp users={users} setUsers={setUsers} />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path={ROUTES.USERS} element={<Users users={users} />} />
          <Route path={ROUTES.BLOG} element={<Blog />} />
          <Route path={ROUTES.POSTS} element={<Posts />} />
          <Route path={ROUTES.POST} element={<Post />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
        </Route>

        <Route path={ROUTES.ERRORPAGE} element={<Errorpage />} />
      </Routes>
    </div>
  )
}
