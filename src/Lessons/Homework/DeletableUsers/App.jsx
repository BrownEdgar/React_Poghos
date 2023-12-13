import { useEffect, useState } from 'react'
import Child from './Child'
import Modal from '../../Modal/Modal'



const DB_URL = import.meta.env.VITE_DB_URL

export default function App() {
  const [users, setUsers] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [currentId, setCurrentId] = useState(null)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const removeUsersById = () => {
    setUsers((prevValue) => {
      return prevValue.filter(elem => elem.id !== currentId)
    })
    setCurrentId(null)
  }

  useEffect(() => {
    fetch(`${DB_URL}/users`)
      .then(res => res.json())
      .then((res) => setUsers(res))
      
  }, [])
 

  return (
    <div className='flex'>
      {
        users.map(elem => {
          return <Child key={elem.id} elem={elem} toggleModal={toggleModal} saveId={setCurrentId}>
            <p>Id:{elem.id}</p>
            <p>Name:{elem.name}</p>
            <p>Username:{elem.username}</p>
          </Child>
        })
      }
            {isOpen
        ? (
          <Modal
            theme="dark"
            title='Delete this user?'
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            <button onClick={toggleModal}>Cancel</button>
            <button onClick={() => {
              removeUsersById();
              toggleModal()
            }}>Delete</button>
          </Modal>
        ) : null}
    </div>
  )
}

