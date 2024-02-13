// // import axios from 'axios'
// import React,{useEffect} from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import './App.css'
// import { addCounter } from './features/counter/counterSlice'
// import { getAsyncPosts,
//   //  savePosts 
//   } from './features/posts/postsSlice'
// import { getAsyncUsers } from './features/users/usersSlice'

// export default function App() {
//   const dispatch = useDispatch()
//   const handleClick =() => {
//     dispatch(addCounter())
//   }
//   const counter = useSelector((state) => state.counter)
//   const posts = useSelector((state) => state.posts)
//   const users = useSelector((state) => state.users)
 
//   useEffect(() => {
//     dispatch(getAsyncUsers())
//     // axios.get('https://jsonplaceholder.typicode.com/posts')
//     // .then(res => dispatch(savePosts(res.data)))
//   }, [])
  
//   return ( 
//     <div className='App'>
//       <h1>counter:{counter}</h1>
//       <button onClick={handleClick}>Add</button>
//       <pre>
//         {
//           // JSON.stringify(users,null,1)
//           users.data.map(post => {
//             return <div key={post.id}>
//               <h4>{post.address.city}:{post.id}</h4>
//               <h2>{post.name}</h2>
//               <p>{post.username}</p>
//               <hr style={{margin:10}}/>
//             </div>
//           })
//         }
//       </pre>
//     </div>
//   )
// }

import {  addUser, deleteUsersById, getAsyncUsers, usersSelector } from '@f/users/usersSlice'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

export default function App() {
  const users = useSelector(usersSelector)
  console.log(users);
  const dispatch = useDispatch()

  const [change, setChange] = useState('')

  useEffect(() => {
dispatch(getAsyncUsers())
  }, [])

  const handleDelete = (id) => {
     dispatch(deleteUsersById(id))
  }
  const handleSubmit = (name) => {
    dispatch(addUser({name:name,id:users[users.length-1].id + 1}))
  }
  const handleChange = (e) => {
    setChange(e.target.value)
  }
  
  
  return (
    <div className="Users">
      <h1>Users</h1>
      <form onSubmit={() => handleSubmit(change)}>
        <input type="text" placeholder="New users name" onChange={handleChange} />
        <input type="submit" value='Add user' />
      </form>
    <div className="grid">
      {
        users.data.map(user => {
          return <div key={user.id}>
            <h3>{user.name}</h3>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        })
      }
    </div>
      </div>
  )
}
