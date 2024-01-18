import { Route, Routes } from 'react-router-dom'
import './App.scss'
import NavBar from './components/Navbar/NavBar'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Errorpage from './pages/Errorpage'
import ROUTES from './routes'
import Post from './pages/Post'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Users from './pages/Users'
import { useState } from 'react'
import PrivateRoutes from './components/Navbar/PrivateRoutes/PrivateRoutes'

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
