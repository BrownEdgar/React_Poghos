import React from 'react'
import "./App.scss"
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Posts from './Pages/Posts'
import Contact from './Pages/Contact'
import { Navigate, Route, Routes } from 'react-router-dom'
import Errorpage from './Pages/Errorpage'
import ROUTES from "./routes.js"
import Users from './Pages/Users.jsx'
export default function App() {
  return (
    <div>
        <Navbar />
        <Routes>
            
            <Route path={ROUTES.HOME} element={<Home />}/>
            <Route path={ROUTES.BLOG} element={<Blog  name = "Secret word"/>}/>
            <Route path={ROUTES.POSTS} element={<Posts />}/>
            <Route path={ROUTES.CONTACT} element={<Contact />}/>
            <Route path={ROUTES.ERRORPAGE} element={<Errorpage />}/>
            {/* <Route path={ROUTES.ERRORPAGE} element={<Navigate to={'/'}/> }/> */}
            <Route path={ROUTES.USERS} element={<Users/> }/>

        </Routes>

        
        
        
        
    </div>
  )
}
