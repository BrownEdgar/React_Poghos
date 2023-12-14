import {useState,useEffect} from 'react'
import axios from 'axios'
import './App.scss'

export default function App() {
    const [data, setData] = useState([])

    useEffect(() => {
    // axios("https://jsonplaceholder.typicode.com/posts?_limit=10")
    axios({
        baseURL:'https://jsonplaceholder.typicode.com/',
        url:'posts',
        params:{
        _limit:15,
        _start:10
        }
    })
    .then(res => {
        if(res.status ===200){
            console.log(res.data)
            setData(res.data)
        }
    }).catch(err=>console.log(err))
    }, [])
    
  return (
    <div className='Posts'>
    {
        data.map(post =>{
            return(
                <div key={post.id}>
                 <h2>{post.title}</h2>   
                 <p>{post.body}</p>
                 <span>{post.id}</span>
                </div>
            )
        })
    }
    </div>
  )
}
