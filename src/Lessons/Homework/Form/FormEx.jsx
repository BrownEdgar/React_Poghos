// import React from 'react'
// import { useRef } from 'react';

// export default function FormEx() {
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         // console.log(e);
//         console.log(ref.current.value);
//     }

//     const ref = useRef()
//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <input type="text" ref={ref}/>
//             <button type='submit'>Click</button>
//         </form>
//     </div>
//   )
// }


import React,{useState} from 'react'

export default function FormEx() {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }
  return (
    <div>
        <form>
            <input type="text" value={value} onChange={handleChange} />
            <button type='submit'>click</button>
        </form>
    </div>
  )
}
