import { useState } from 'react'
import Child from './CityChild'
import Modal from '../Modal/Modal'
import './Cities.scss'

import swi from '../../assets/flagImages/swi.png'
import ita from '../../assets/flagImages/ita.png'
import bel from '../../assets/flagImages/bel.png'
import ger from '../../assets/flagImages/ger.png'
import hun from '../../assets/flagImages/hun.png'
import fra from '../../assets/flagImages/fra.png'
import usa from '../../assets/flagImages/usa.jpeg'
import esp from '../../assets/flagImages/esp.png'
import uk from '../../assets/flagImages/uk.png'




export default function App() {
  const [cities, setCities] = useState([
    { id: 1, title: 'Bern',flag:swi },
    { id: 2, title: 'Bologna',flag:ita},
    { id: 3, title: 'Birmingham',flag:uk},
    { id: 4, title: 'Berlin',flag:ger},
    { id: 5, title: 'Boston',flag:usa},
    { id: 6, title: 'Brussels',flag:bel},
    { id: 7, title: 'Budapest',flag:hun},
    { id: 8, title: 'Bordeaux',flag:fra},
    { id: 9, title: 'Brugge',flag:bel},
    { id: 10, title: 'Bergamo',flag:ita},
    { id: 11, title: 'Barcelona',flag:esp},
    { id: 12, title: 'Belfast',flag:uk},
  ])
  const [isOpen, setIsOpen] = useState(false)
  const [currentId, setCurrentId] = useState(null)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const removeCitiesById = () => {
    setCities((prevValue) => {
      return prevValue.filter(elem => elem.id !== currentId)
    })
    setCurrentId(null)
  }
  return (
    <div className='App'>
      <h1 className=' App__Title'>Cities starting with Letter B</h1>
      <div className='App__List'>
        {
          cities.map(elem => {
            return <Child
              key={elem.id}
              elem={elem}
              saveId={setCurrentId}
              toggleModal={toggleModal}

            />
          })
        }
      </div>
      {isOpen ? <Modal toggleModal={toggleModal} removeItem={removeCitiesById} /> : null}
    </div>
  )
}
