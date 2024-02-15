import {  addUser, deleteUsersById, getAsyncUsers, usersSelector } from '@f/users/usersSlice'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

export default function App() {
  const {data:users,error,loading} = useSelector(usersSelector)
  const dispatch = useDispatch()

  const [change, setChange] = useState('')

  useEffect(() => {
dispatch(getAsyncUsers())
  }, [])

  const handleDelete = (id) => {
     dispatch(deleteUsersById(id))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUser({name:change,id:users[users.length-1].id + 1}))
  }
  const handleChange = (e) => {
    setChange(e.target.value)
  }
  
  
  return (
    <div className="Users">
      <h1 style={{color:'orange'}}>Users</h1>
      <form onSubmit={handleSubmit} style={{margin:15}}>
        <input type="text" placeholder="New users name" onChange={handleChange} />
        <input type="submit" value='Add user' />
      </form>
    <div className="grid">
      {
        users.map(user => {
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
