import { useEffect, useState } from 'react'

import './App.scss'
import classNames from 'classnames';

export default function App() {
  const [messages, setMessages] = useState(() => {
    return JSON.parse(localStorage.getItem('messages')) || []
  });
  const [repeatedIndex, setRepeatedIndex] = useState(-1)

  const handleSubmit = (e) => {
    e.preventDefault();
    const { message } = e.target;
    const i = messages.indexOf(message.value)
    if (i !== -1) {
      setRepeatedIndex(i);
      setTimeout(() => {
        setRepeatedIndex(-1)
      }, 1800)
    } else {
      setMessages([...messages, message.value]);
    }
    e.target.reset()
  }
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages))
  }, [messages])


  const handleClear = () => {
    localStorage.removeItem('messages');
    setMessages([])
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input type="text" id='message' placeholder='message' required />
        <input type="submit" value="save" />
      </form>
      <hr />
      <button className='clear' onClick={handleClear}>clear All</button>
      <ul>
        {
          messages.map((elem, index) => {
            return <li
              key={index}
              className={classNames({ animated: index === repeatedIndex })}
            >
              {elem}
            </li>
          })
        }
      </ul>
    </div>
  )
}

