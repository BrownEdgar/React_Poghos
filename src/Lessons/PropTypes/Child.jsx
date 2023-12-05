import PropTypes from 'prop-types'

export default function Child({ elem , toggleModal }) {

  return (
    <div className="App__List__item">
      <span className='App__icon' onClick={toggleModal}>
      <i className='bx bx-x'></i>
      </span>
      <img src={elem.image} />
      <div className='content'>
          <h2>{elem.title}</h2>
          <p>{elem.description}</p>
          <button>Go somewhere</button>
      </div>
    </div>
  )
}

Child.propTypes = {
    elem: PropTypes.exact({
        id: PropTypes.number,
        title: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string,
    }),
    toggleModal: PropTypes.func.isRequired
}

