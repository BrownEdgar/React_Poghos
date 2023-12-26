import './App.scss'

import { useCallback, useMemo, useState } from 'react'
import BigComponent from './BigComponent'

export default function App() {
  const [count, setCount] = useState(0);
  const [number] = useState(1e5)

  const [posts, setPosts] = useState(() => {
    return () => {
      console.log('ok')
    }
  })

  // const bigComponent = useMemo(() => <BigComponent n={number} />, [number])

  const handleClick = useCallback(
    () => {
      const message = `this function is created every time`;
      console.log(message)
    },
    [],
  )


  return (
    <div className='App'>
      <h1>useMemo example</h1>
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
      <BigComponent n={number} handleClick={handleClick} posts={posts} />
    </div>
  )
}
