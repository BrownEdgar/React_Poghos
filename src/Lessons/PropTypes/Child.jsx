import PropTypes from 'prop-types'

<<<<<<< HEAD

export default function Child({elem ,saveId,toggleModal}) {
  return (
    <div className="App__list__item" key={elem.id}>
        <span className='App_icon'onClick={() => {
            toggleModal();
            saveId(elem.id)
        }}>
            <i className='bx bx-x'></i>
        </span>
        <img src={elem.image}  />
        <div className='content'>
            <h2>{elem.title}</h2>
            <p>{elem.description}</p>
            <button>Go Somewere</button>
        </div>
        
=======
export default function Child({ elem, toggleModal, seveId }) {
  return (
    <div className="App__List__item">
      <span className='App__icon' onClick={() => {
        toggleModal();
        seveId(elem.id)
      }}>
        <i className='bx bx-x'></i>
      </span>
      <img src={elem.image} />
      <div className='content'>
        <h2>{elem.title} </h2>
        <p>{elem.description}</p>
        <button>Go somewhere</button>
      </div>
>>>>>>> 2295e469cc115c9befa8bd29a66e7c21753c84f2
    </div>
  )
}


<<<<<<< HEAD
Child.defaultProps = {
    
}

Child.propTypes = {
    elem:PropTypes.exact({
        id:PropTypes.number,
        title:PropTypes.string,
        image:PropTypes.string,
        description:PropTypes.string,
        
    }),
    toggleModal:PropTypes.func.isRequired,
    saveId:PropTypes.func.isRequired,
=======

Child.propTypes = {
  elem: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }),
  toggleModal: PropTypes.func.isRequired,
  seveId: PropTypes.func.isRequired,
>>>>>>> 2295e469cc115c9befa8bd29a66e7c21753c84f2
}

