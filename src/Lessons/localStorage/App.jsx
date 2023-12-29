import { useEffect, useState } from 'react'

import './App.scss'
import classNames from 'classnames';

export default function App() {
  const [messages, setMessages] = useState(() => {
    return JSON.parse(localStorage.getItem('messages')) || []
  });
  const [repeatedIndex, setRepeatedIndex] = useState(-1)
  const [selected, setSelected] = useState(null)
  const [mounted, setMounted] = useState(null)

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
        setMounted(messages.length)
        console.log(messages.length);
      setTimeout(() => {
        setMounted(null)
      }, 1200)
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

  const handleDel = (index) => {
    setSelected(index)
    setTimeout(() => {
      let result = messages.filter(message => messages.indexOf(message) !== index)
      setMessages(result)
      setSelected(null)
    },1200)
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
              className={classNames({ animated: index === repeatedIndex,removing:selected === index,mounting:mounted === index})}
            >
              {elem}
              <span onClick={() => handleDel(index)}>X</span>
            </li>
          })
        }
      </ul>
    </div>
  )
}

