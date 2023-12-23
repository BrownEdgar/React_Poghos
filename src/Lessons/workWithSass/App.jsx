import { useState } from 'react'
import Modal from '../Modal/Modal'
import './App.scss'

export default function App() {
<<<<<<< HEAD
  const[isOpen,setIsOpen] = useState(true)
=======
  const [isOpen, setIsOpen] = useState(true)
>>>>>>> 340b5e19c2e3d2794cb78d258557759ea0eb766a

  return (
    <div className='App'>
      <h1 className='App__title'>
        Lorem ipsum dolor sit.
        <span>(3)</span>
      </h1>
      <p className='App__desc App__desc-black'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat odit consequuntur pariatur placeat. Accusantium quidem voluptatum reiciendis nihil, laboriosam explicabo optio recusandae quasi quisquam quae veniam, deleniti amet laudantium odio?
      </p>
      <p className='App__desc App__desc-blue'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat odit consequuntur pariatur placeat. Accusantium quidem voluptatum reiciendis nihil, laboriosam explicabo optio recusandae quasi quisquam quae veniam, deleniti amet laudantium odio?
      </p>
      <Modal theme={'dark'} title='Thank you' isOpen={isOpen} setIsOpen={setIsOpen}>
<<<<<<< HEAD
       <p>Lorem ipsum dolor sit</p>
       <p>Lorem ipsum dolor sit</p>
       <p>Lorem ipsum dolor sit</p>
      </Modal>
=======
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </Modal>

>>>>>>> 340b5e19c2e3d2794cb78d258557759ea0eb766a
    </div>
  )
}

