// import axios from 'axios'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addCounter } from './features/counter/counterSlice'
import { getAsyncPosts,
  //  savePosts 
  } from './features/posts/postsSlice'

export default function App() {
  const dispatch = useDispatch()
  const handleClick =() => {
    dispatch(addCounter())
  }
  const counter = useSelector((state) => state.counter)
  const posts = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(getAsyncPosts())
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then(res => dispatch(savePosts(res.data)))
  }, [])
  
  return ( 
    <div className='App'>
      <h1>counter:{counter}</h1>
      <button onClick={handleClick}>Add</button>
      <pre>
        {
          // JSON.stringify(posts,null,1)
          posts.data.map(post => {
            return <div key={post.id}>
              <h4>{post.userId}:{post.id}</h4>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <hr style={{margin:10}}/>
            </div>
          })
        }
      </pre>
    </div>
  )
}
