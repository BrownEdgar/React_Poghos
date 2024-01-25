import React from 'react'

export default function Users({ users }) {
  return (
    <div className='Users'>
      {users.map(user => {
        return <div key={user}>
          <h2>User N {user}</h2>
        </div>
      })}
    </div>
  )
}
