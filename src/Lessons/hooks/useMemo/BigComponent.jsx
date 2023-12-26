import React, { memo } from 'react'

export function BigComponent({ n, handleClick, posts }) {

  console.log('BigComponent run...')
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i
  }

  return (
    <div>
      <h2>BigComponent: {sum}</h2>
      <button onClick={posts}>handleClick</button>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(BigComponent)
