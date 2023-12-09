import { useState } from 'react'
import Child from './Child'
import Modal from '../Modal/Modal'

import './App.scss'

const ImageUrl = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export default function App() {
  const [stories, setStories] = useState([
    { id: 1, title: 'Private Villa', image: ImageUrl, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, optio.' },
    { id: 2, title: 'Private Villa', image: ImageUrl, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, optio.' },
    { id: 3, title: 'Private Villa', image: ImageUrl, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, optio.' },
  ])
  const [isOpen, setIsOpen] = useState(false)
  const [currentId, setCurrentId] = useState(null)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const removeStoriesById = () => {
    setStories((prevValue) => {
      return prevValue.filter(elem => elem.id !== currentId)
    })
    setCurrentId(null)
  }
  return (
    <div className='App'>
      <h1 className='App__Title'>Our Story</h1>
      <p className='App__Desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut consequatur praesentium accusamus cumque illum inventore eum mollitia repudiandae porro. Accusamus fuga, reiciendis nihil iste explicabo autem ex repellendus consectetur?</p>
      <div className='App__List'>
        {
          stories.map(elem => {
            return <Child
              key={elem.id}
              elem={elem}
              seveId={setCurrentId}
              toggleModal={toggleModal}

            />
          })
        }
      </div>
      {isOpen ? (
      <Modal 
       theme="dark"
       > 

        <h1 className='Modal__title'>Delete this story?</h1>
        <button onClick={toggleModal}>Cancel</button>
        <button onClick={() => {
          removeStoriesById();
          toggleModal()
        }}>Delete</button> 
       </Modal>
       )
       : null}
    </div>
  )
}
