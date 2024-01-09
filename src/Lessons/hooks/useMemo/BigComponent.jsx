import React, { memo } from 'react'

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