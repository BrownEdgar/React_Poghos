
import Child from './Child'

import './App.scss'
import {useState} from 'react'
import Modal from '../Modal/Modal'

const ImageUrl = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export default function App() {
    const [stories, setStories] = useState([
        {id: 1, title: 'Private Villa', image: ImageUrl, description: 'Lorem ipsum dolor sit amet consectetur adipisicing eli. Commodi, optio.'},
        {id: 2, title: 'Private Villa', image: ImageUrl, description: 'Lorem ipsum dolor sit amet consectetur adipisicing eli. Commodi, optio.'},
        {id: 3, title: 'Private Villa', image: ImageUrl, description: 'Lorem ipsum dolor sit amet consectetur adipisicing eli. Commodi, optio.'},
    ])

    const [isOpen, setisOpen] = useState(false)

    const toggleModal = () => {
        setisOpen(!isOpen)
    }

    const removeStoriesById = (id) => {
        setStories((prevValue) => {
            return prevValue.filter(elem => elem.id !== id)
        })
    }

  return (
    <div className="App">
        <h1 className='App__Title'>Our Story</h1>
        <p className='App__Desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem unde debitis odit dignissimos sunt nulla corrupti. Numquam nisi, deserunt obcaecati commodi dolorum deleniti perspiciatis cumque totam qui! Voluptates, nostrum quia.</p>
        <div className="App__List">{
            stories.map(elem => {
                return <Child key={elem.id} elem={elem} removeItem={removeStoriesById} toggleModal={toggleModal}/>
            })
        }</div>
        {isOpen ? <Modal /> : null}
    </div>
  )
}
