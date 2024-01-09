<<<<<<< HEAD
import Child from "./Child"
import './App.scss'
import {useState} from 'react'
import Modal from "../Modal/modal"

const ImageUrl = 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const ImageUrl2 = "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const ImageUrl3 = "https://images.unsplash.com/photo-1545169734-58a4a6353ccb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

function App() {
    
    const [stories, setStories] = useState([
        {id: 1, title:"Private Villa", image:ImageUrl, description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, laborum!' },
        {id: 2, title:"Office Lease", image:ImageUrl2, description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, laborum!' },
        {id: 3, title:"Furnished Appartment", image:ImageUrl3, description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, laborum!' }

    ])

    const [isOpen ,setiSOpen] = useState(false)
    const toggleModal = () => {
        setiSOpen(!isOpen)
    }

    const [currentId, setCurentId] = useState(null)

    const removeStoriesById = () => {
        setStories((prevValue) => {
            return prevValue.filter(elem => elem.id !== currentId )
        })
        setCurentId(null)
    }

    

  return (
    <div className="App">
        <h1 className="App__title">
            Our Story
        </h1>
        <p className="App__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus hic fugit iure labore aspernatur minima laudantium numquam pariatur enim minus fuga, fugiat ducimus doloribus. Animi, sint quia. Impedit, laudantium eos!
        </p>
        <div className="App__list">
            {
                stories.map(elem => {
                    return (
                       <Child key={elem.id} elem={elem} saveId={setCurentId} toggleModal={toggleModal}/>
                       
                    )
                })
            }
        </div>
        {isOpen ? (
        <Modal 
            theme = "dark"
            title="Thank You"
            >

            <button onClick={toggleModal}>
                Cancel
            </button>
            <button onClick={() => {
                removeStoriesById()
                toggleModal()
            }}>
                Delete
            </button>

            </Modal>
            ) : null}
    </div>
  )
}

export default App
=======
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
      {isOpen
        ? (
          <Modal
            theme="dark"
            title='Delete this story?'
          >
            <button onClick={toggleModal}>Cancel</button>
            <button onClick={() => {
              removeStoriesById();
              toggleModal()
            }}>Delete</button>
          </Modal>
        ) : null}
    </div>
  )
}
>>>>>>> 2295e469cc115c9befa8bd29a66e7c21753c84f2
