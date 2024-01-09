<<<<<<< HEAD
import './App.scss'
import Modal from '../Modal/modal'
import { useState } from 'react'

export default function App() {

    const [isOpen, setIsOpen] = useState(true)

  return (
   <div className='App'>
        <h1 className='App__title'>
            Lorem ipsum dolor sit.
            <span>(3)</span>
        </h1>
        <p className='App__desc App__desc-black'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque amet sequi soluta architecto deleniti quia beatae, sed iste aliquid impedit dignissimos modi, perferendis tempora officiis fuga nihil quaerat, atque dolore!
        </p>
        <p className='App__desc App__desc-blue'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta doloribus, quos ex perferendis repellat officia amet quis illum molestias mollitia, sapiente dolorum! Culpa nulla laborum maiores aut cumque! Vero, ab.
        </p>
        <Modal theme={'dark'} title="thank you" isOpen={isOpen} setIsOpen={setIsOpen}>
            <h1>Thank You</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
        </Modal>
   </div>
=======
import { useState } from 'react'
import Modal from '../Modal/Modal'
import './App.scss'

export default function App() {
  const [isOpen, setIsOpen] = useState(true)

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
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </Modal>

    </div>
>>>>>>> 2295e469cc115c9befa8bd29a66e7c21753c84f2
  )
}

