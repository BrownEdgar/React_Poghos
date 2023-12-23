import React from 'react'

import './List.scss'

export default function List({ languagesList }) {
  return (
    <div className='List'>
      <div className="List__buttons">
        {languagesList.map(elem => {
          return <button key={elem}>{elem}</button>
        })}
      </div>
    </div>
  )
}
