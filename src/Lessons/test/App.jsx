import { useEffect, useState } from "react"
import axios from 'axios'
import Child from "../PropsChildren/Child"

const DB_URL = import.meta.env.VITE_DB_URL

export default function App() {

const [posts, setPosts] = useState([])

    useEffect(() =>{
        axios.get(`${DB_URL}/posts`)
        .then(res => setPosts(res.data))
    },[])
  return (
    <div className="flex">
        {   
        posts.map(elem => {
            return <Child key={elem.id} title={elem.title} >
                <p>{elem.body}</p>
            </Child>
        })
        }
    </div>
  )
}
