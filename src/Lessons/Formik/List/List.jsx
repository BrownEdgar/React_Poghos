import React, { useEffect, useState } from 'react'
import classNames from 'classnames';

import './List.scss'

export default function List({ languagesList, users }) {
  const [currentLanguage, setCurrentLanguage] = useState('all');
  const [options, setOptions] = useState({})

  const setLanguage = (n) => {
    setCurrentLanguage(n)
  }

  useEffect(() => {
    const newOptions = users.reduce((acc, nextUser) => {
      acc[nextUser?.language] ? acc[nextUser?.language] += 1 : acc[nextUser.language] = 1
      return acc;
    }, {});
    setOptions({ ...newOptions, all: users.length })
  }, [users.length])

  return (
    <div className='List'>
      <div className="List__buttons">
        {languagesList.map(elem => {
          return <button
            key={elem}
            onClick={() => setLanguage(elem)}
            className={classNames({
              active: currentLanguage === elem
            })}
          >
            {elem} ({options[elem]})
          </button>
        })}
      </div>
      <div className='List__users'>
        {
          users.map(user => {
            if (currentLanguage === user.language || currentLanguage === 'all') {
              return (
                <div key={user.id}>
                  <h2>{user.username}</h2>
                  <p>language: <span>{user.language}</span></p>
                </div>
              )
            }

          })
        }
      </div>
    </div>
  )
}
