<<<<<<< HEAD
import { useEffect, useState } from "react"
import Child from '../PropsChildren/Child'
import axios from 'axios'


const DB_URL = import.meta.env.VITE_DB_URL
console.log(DB_URL)
export default function App() {

  const[posts,setPosts] = useState([])

    useEffect(() =>{
    axios.get(`${DB_URL}/posts`)
      .then(res => setPosts(res.data))
    },[])
  return (
    <div className="flex">
      {
        posts.map(elem =>{
          return <Child key={elem.id}   title={elem.title}>
               <p>{elem.body}</p>
=======
import { useEffect, useState } from 'react'
import Child from '../PropsChildren/Child'
import axios from 'axios'

const DB_URL = import.meta.env.VITE_DB_URL

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(`${DB_URL}/posts`)
      .then(res => setPosts(res.data))
  }, [])
  console.log(posts)

  return (
    <div className='flex'>
      {
        posts.map(elem => {
          return <Child key={elem.id} title={elem.title}>
            <p>{elem.body}</p>
>>>>>>> 340b5e19c2e3d2794cb78d258557759ea0eb766a
          </Child>
        })
      }
    </div>
  )
}
