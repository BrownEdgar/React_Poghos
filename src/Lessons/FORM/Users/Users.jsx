import {} from 'react'
import './Users.scss'
import PropTypes from 'prop-types'

export default function Users({ users,setUsers }) {
  const handleDel = (id) => {
    let result = users.filter(user => user.id !== id)
    setUsers(result)
  }

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
                  <td onClick={() => handleDel(user.id)}>X</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.array,
  setUsers:PropTypes.func
}