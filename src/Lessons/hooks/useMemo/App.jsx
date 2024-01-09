import './App.scss'

import { useMemo, useState,useCallback } from 'react'
import BigComponent from './BigComponent'

export default function App() {
    const [count, setCount] = useState(0);
    const [number] = useState(1e8)

    // const bigComponent = useMemo(() => <BigComponent n={number}/> [number])

    const handleClick = useCallback(
        () => {
            const message = `this function created every time`
            console.log(message)
        },
      [],
    )
    
  return (
        <div className="App">
            <h1>useMemo example</h1>
            <button onClick={() => setCount(count + 1)}>count: {count}</button>
            <BigComponent n={number} handleClick={handleClick}/>
        </div>
  )
}

