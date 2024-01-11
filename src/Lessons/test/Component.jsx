import React, { useEffect } from 'react'

export default function Component() {

  useEffect(() => {

    return () => {
      console.log("component is DEAD!")
    }
  }, [])

  return (
    <div>
      <h2> Nested component</h2>
    </div>
  )
}
