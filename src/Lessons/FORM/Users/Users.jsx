import React from 'react'
import"./Users.scss"

export default function Users({users}) {
  return (
    <div className="Users">
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>username</th>
                    <th>email</th>
                    <th>Del</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}
