import './App.scss'
import NavBar from './components/Navbar/NavBar'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Posts from './pages/Posts'

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Blog />
      <Posts />
      <Contact />
    </div>
  )
}
