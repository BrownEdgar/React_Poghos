import {useState} from 'react'
import './Movies.scss'
import Modal from '../../Modal/Modal'

export default function Movies() {
    const[movies,setMovies] = useState([
        {   id:1,
            title:'Title',
            genre:"Genre",
            stock:"Stock",
            rate:"Rate",

        },
        {   id:2,
            title:'Terminator',
            genre:"Action",
            stock:6,
            rate:2.5,

        },
        {   id:3,
            title:'Die Hard',
            genre:"Action",
            stock:5,
            rate:2.5,

        },
        {   id:4,
            title:'Get Out',
            genre:"Thriller",
            stock:8,
            rate:3.5,

        },
        {   id:5,
            title:'Trip to Italy',
            genre:"Comedy",
            stock:7,
            rate:3.5,

        },
        {   id:6,
            title:'Airplane',
            genre:"Comedy",
            stock:7,
            rate:3.5,

        },
    ])
    const [isOpen,setIsOpen] = useState(false)
    const [currentId, setCurrentId] = useState(null)

    const toggleModal = () => {
      setIsOpen(!isOpen)
    }
  
    const removeMoviesById = () => {
      setMovies((prevValue) => {
        return prevValue.filter(elem => elem.id !== currentId)
      })
      setCurrentId(null)
    }

    

  return (
    <div className='Movies'>
        <p style={{padding:'20px'}}>Showing {movies.length-1} movies in the database</p>
        {movies.map(movie => {
            return <div key={movie.id} className={`Movies__Movie ${movie.title === 'Title'?"title":null}`}>
            <p>{movie.title}</p>
            <p>{movie.genre}</p>
            <p>{movie.stock}</p>
            <p>{movie.rate}</p>
            <button className='Movies__Delete' onClick={() => {
                toggleModal()
                setCurrentId(movie.id)
            }}>Delete</button>
            </div>
        })}
        {isOpen
        ? (
          <Modal
            theme="light"
            title='Delete this movie?'
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            <button onClick={toggleModal}>Cancel</button>
            <button onClick={() => {
              removeMoviesById();
              toggleModal()
            }}>Delete</button>
          </Modal>
        ) : null}
    </div>
  )
}
