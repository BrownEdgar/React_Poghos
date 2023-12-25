import { useEffect, useState } from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types'

import './List.scss'

export default function List({ citiesList, users }) {
  const [currentCity, setCurrentCity] = useState('All');
  const [options, setOptions] = useState({})

  const setCity = (n) => {
    setCurrentCity(n)
  }

  useEffect(() => {
    const newOptions = users.reduce((acc, nextUser) => {
      acc[nextUser["address"]["city"]] ? acc[nextUser["address"]["city"]] += 1 : acc[nextUser["address"]["city"]] = 1
      return acc;
    }, {});
    setOptions({ ...newOptions, All: users.length })
  })

  return (
    <div className='List'>
      <div className="List__buttons">
        {citiesList.map(elem => {
          return <button
            key={elem}
            onClick={() => setCity(elem)}
            className={classNames({
              active: currentCity === elem
            })}
          >
            {elem} ({options[elem]})
          </button>
        })}
      </div>
      <div className='List__users'>
        {
          users.map(user => {
            if (currentCity === user["address"]["city"] || currentCity === 'All') {
              return (
                <div key={user["id"]}>
                  <h2>{user["first_name"]} {user["last_name"]}</h2>
                  <p>Address: <span>{user.address.city}</span> <span>{user.address.street}</span> <span>{user.address.house}</span></p>
                  <p>Age:{user.age}</p>
                  <p>Salary:{user.salary}</p>
                  <p>Best Friend:{user.bestFriend}</p>
                </div>
              )
            }

          })
        }
      </div>
    </div>
  )
}


List.propTypes = {
    citiesList:PropTypes.arrayOf(PropTypes.string),
    users:PropTypes.arrayOf(PropTypes.exact({
        id:PropTypes.number,
        first_name:PropTypes.string,
        last_name:PropTypes.string,
        address:PropTypes.exact({
            street:PropTypes.string,
            house:PropTypes.number,
            city:PropTypes.string
        }),
        age:PropTypes.number,
        salary:PropTypes.number,
        bestFriend:PropTypes.string,
        

    }))
  }


