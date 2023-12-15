import {useState,useEffect,useReducer} from 'react'
import reducer,{ initialState } from './reducer'
import axios from 'axios'
import axiosOptions from '../../../../helpers/axios.d'
import { ADD_DEV, DEL_POST, GET_POSTS, SHUFFLE_ARR, UPDATE_POST_ID } from './actionTypes'
import './App.scss'


export default function App() {
    const [name, setName] = useState('')
    const [state, dispatch] = useReducer(reducer,initialState)

const handleDev = () => {
    dispatch({type:ADD_DEV,payload:{name:name}})
    setName('')
}

const handleArr = () => {
    dispatch({type:SHUFFLE_ARR})
}

const handleDelete = (id) => {
    dispatch({type:DEL_POST,payload:id})
}

const handleUpdate = () => {
    dispatch({type:UPDATE_POST_ID})
}

    useEffect(() => {
        axios(axiosOptions('posts', 10))
          .then(res =>{
             dispatch({ type: GET_POSTS, payload: { posts: res.data } })
            console.log(res.data)
          })
      }, [])
  return (
    <div>
        <h1>Developers:{JSON.stringify(state.developers)}</h1>
        <input type="text" value={name} onChange={e => setName(e.target.value)}  />
        <button onClick={handleDev}>Add dev</button>
        <h1>Arr:{JSON.stringify(state.arr)}</h1>
        <button onClick={handleArr}>Shuffle Arr</button>
        <button onClick={handleUpdate}>Update ID</button>
        <h2>Actions:{state.actions}</h2>
        <h1>Posts</h1>
        {
           state.posts.map(post => {
            return(
                <div key={post.id} className='Post'>
                    <span onClick={() => handleDelete(post.id)} >X</span>
                    <h4>{post.id}</h4>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            )
           }) 
        }  
    </div>
  )
}
