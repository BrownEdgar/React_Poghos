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

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.BLOG} element={<Blog name="Secret word" />} />
        <Route path={ROUTES.POSTS} element={<Posts />} />
        <Route path={ROUTES.POST} element={<Post />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.ERRORPAGE} element={<Errorpage />} />
      </Routes>
    </div>
  )
}
