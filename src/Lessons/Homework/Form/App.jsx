import { nanoid } from 'nanoid'
import {useState} from 'react'
import './App.scss'


export default function App() {
    const [users, setUsers] = useState([])
    const [name, setName] = useState('')

    const handleUser = (e) => {
        e.preventDefault()
        setName('')
        console.log(name);
        const addName = {
            id:nanoid(),
            name:name
        }
        console.log(addName);
        setUsers([...users,addName])

    }
    const handleDel =(id) => {
       let result =  users.filter(user => user.id !== id)   
       setUsers(result)
        
    }
  return (
    <div>
        <form onSubmit={handleUser}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} style={{paddingLeft:2}} name="username"/>
        <input type="submit" value="Add user"/>
        </form>
        <h1>User</h1>
        <div className='Count'>{users.length}</div>
        <div className='Users'>
            {
            users.map(user => {
                return(
                    <div key={user.id} className='User'>{user.name}
                    <span onClick={() => handleDel(user.id)}>X</span>
                    </div>
                )
            })
            }
        </div>
        
    </div>
  )
}
