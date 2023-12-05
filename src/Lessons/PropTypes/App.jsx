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

    const removeStoriesById = (id) => {
        setStories((prevValue) => {
            return prevValue.filter(elem => elem.id !== id )
        })
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
                       <Child key={elem.id} elem={elem} removeItem={removeStoriesById} toggleModal={toggleModal}/>
                       
                    )
                })
            }
        </div>
        {isOpen ? <Modal /> : null}
    </div>
  )
}

export default App