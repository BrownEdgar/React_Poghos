import React, { useState } from 'react'

import './App.scss'

export default function App() {
  const [isChecked, setIsChecked] = useState(false)
  const [email, setEmail] = useState('')
  const [users, setUsers] = useState([
    'example@gmail.com',
    'aaa@gmail.com',
    'bbb@gmail.com'
  ])

  const [hasError, setHasError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsers([...users, email]);
    setHasError(false);
    setEmail('');
    e.target.reset()
  }

  const handleChange = (e) => {
    setIsChecked(e.target.checked)
  }
  const handelEmailchange = (e) => {
    setHasError(users.includes(e.target.value))
    setEmail(e.target.value)
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='email' onBlur={handelEmailchange} />
        <p className="error">
          {hasError ? 'this email is alredy used!' : ''}
        </p>
        <p>
          <input type="checkbox" id='policy' onChange={handleChange} />
          <label htmlFor="policy">I agree with privacy policy</label>
        </p>
        <input type="submit" value="save" disabled={!isChecked || hasError || !email} />
      </form>

    </div>
  )
}

// import React, { useState } from 'react'
// const brands = ["mercedes", "bmw", "lada", "mazda", "toyota", "lexus", "Ford", "Ferarri", "chevrolet"]

// export default function App() {
//   const [car, setCar] = useState(brands[0]);
//   const handleChange = (e) => {
//     setCar(e.target.value)
//   }
//   return (
//     <div>
//       <select name="cars" id="cars" onChange={handleChange} defaultValue={car}>
//         {
//           brands.toSorted().map(brand => {
//             return <option value={brand} key={brand}>{brand}</option>
//           })
//         }
//       </select>
//       <h1>current car is:  {car || "?"}</h1>
//     </div>
//   )
// }


// import React, { useState } from 'react'

// export default function App() {
//   const [message, setMessage] = useState('');
//   const handleChange = (e) => {
//     setMessage(e.target.value)
//   }
//   return (
//     <div>
//       <textarea
//         name="message"
//         id="message"
//         cols="50"
//         rows="10"
//         maxLength={450}
//         onChange={handleChange}
//       >

//       </textarea>
//       <p>mnac {450 - message.length}/450</p>
//     </div>
//   )
// }


