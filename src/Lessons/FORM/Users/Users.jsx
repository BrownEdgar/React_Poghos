import React from 'react'
import './Users.scss'

export default function Users({ users }) {
  return (
    <div className='Users'>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Username</th>
            <th>Email</th>
            <th>DEL</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>X</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
