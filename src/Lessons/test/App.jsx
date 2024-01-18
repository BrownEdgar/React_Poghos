<<<<<<< HEAD

import { useState } from "react"
import  "./App.scss"

export default function App() {
  


  return (
    <div className='App'>
      
      
=======
import { useEffect, useState } from 'react';

import './App.scss'
import Component from './Component';
import axios from 'axios';

export default function App() {
  const [count, setCount] = useState(1)

  useEffect(() => {
    if (count > 0 && count < 101) {
      axios(`https://jsonplaceholder.typicode.com/posts/${count}`)
        .then(res => console.log(res.data))
    } else {
      console.log('invalid count')
    }
  }, [count])


  const handleClick = () => setCount(count - 1)

  return (
    <div className='App'>
      <h1>count: {count}</h1>
      <button onClick={handleClick}>add count</button>
      {
        count < 10 ? <Component /> : null
      }
>>>>>>> 94ea8c2a488875758cccfc459bcd7fa5fdfc64da
    </div>
  )
}
