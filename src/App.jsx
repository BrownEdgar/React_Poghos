import React from 'react'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addCount } from './features/counter/counterSlice';
import { addUser } from './features/users/usersSlice';

export default function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addUser({ username: 'Poghos' }))
  }

  return (
    <div className='App'>
      <h1>React Redux</h1>
      <pre>
        {JSON.stringify(users, null, 1)}
      </pre>
      <button onClick={() => dispatch(addCount())}>plus</button>
      <button onClick={handleClick}>add user</button>
    </div>
  )
}
