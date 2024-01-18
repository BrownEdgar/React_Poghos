import React, { memo } from 'react'

<<<<<<< HEAD
 function BigComponent({n,handleClick}) {
console.log("BigComponent run ...")
let sum = 0;

for(let i = 0;i <= n;i++) {
    sum +=1
}


  return (
        <div>
            <h2>bigComponent: {sum}</h2>
        </div>
  )
}

export default memo(BigComponent)
=======
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
>>>>>>> 94ea8c2a488875758cccfc459bcd7fa5fdfc64da
