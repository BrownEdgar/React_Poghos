import {} from 'react'
import './App.scss'
import NavBar from './components/Navbar/NavBar'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Posts from './pages/Posts'
import { Routes,Route, Navigate } from 'react-router-dom' 
import ErrorPage from './pages/ErrorPage'
import ROUTES from './routes'
import Users from './pages/Users'

export default function App() {
  return (
    <div>
        <NavBar/>
    <Routes>
        <Route path={ROUTES.HOME}element={<Home/>}/>
        <Route path={ROUTES.BLOG}element={<Blog name="Secret word"/>}/>
        <Route path={ROUTES.POSTS}element={<Posts/>}/>
        <Route path={ROUTES.CONTACT}element={<Contact/>}/>
        <Route path={ROUTES.USERS}element={<Users/>}/>
        <Route path={ROUTES.ERRORPAGE}element={<ErrorPage/>}/>
        {/* <Route path={ROUTES.ERRORPAGE}element={<Navigate to={'/'}/>}/> */}
    </Routes>
    </div>
  )
}
