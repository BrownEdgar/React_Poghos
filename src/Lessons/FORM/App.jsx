import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.scss'
import Users from './Users/Users'

export default function App() {
  const [users, setUsers] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, email } = e.target;
    const isEmailExist = users.some(user => user.email === email.value.trim());

    if (isEmailExist) {
      alert("this user is alredy exist!")
    } else {
      const user = {
        id: nanoid(),
        username: username.value.trim(),
        email: email.value.trim(),
      }
      setUsers([...users, user])
      e.target.reset()
    }
  }

  return (
    <div className='App'>
      <h1 className='App__title'>Contact US</h1>
      <p className='App__text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis quidem consequuntur a, tempore atque ut autem amet nam voluptatum illo, earum minima eum dolore quod inventore eos in modi.
      </p>
      <form className='App__form' onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' name="username" required />
        <input type="email" placeholder='Email' name="email" required />
        <input type="submit" value='Send' />
      </form>
      <hr />
      <Users users={users} />
    </div>
  )
}
