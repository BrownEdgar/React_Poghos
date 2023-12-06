import PropTypes from 'prop-types'

export default function Child({ elem, toggleModal, saveId }) {
  return (
    <div className="App__List__item" >
      <span className='App__icon' onClick={() => {
        toggleModal();
        saveId(elem.id)
      }}>
        <i className='bx bx-x'></i>
      </span>
      <div className='content'>
        <h2>{elem.title} </h2>
        <span className='App__flagContainer' style={{"background-image":`url(${elem.flag})`}}></span>
      </div>
    </div>
  )
}



Child.propTypes = {
  elem: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    flag:PropTypes.string,
  }),
  toggleModal: PropTypes.func.isRequired,
  saveId: PropTypes.func.isRequired,
}