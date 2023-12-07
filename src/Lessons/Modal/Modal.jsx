import './Modal.scss'
import PropTypes from 'prop-types'

 export default function Modal({toggleModal, removeItem}) {
  return (
    <div className="Modal">
        <div className="Modal__content">
            <h1 className='Modal__title'>
                Delete This Story?
            </h1>
            <button onClick={toggleModal}>
                Cancel
            </button>
            <button onClick={() => {
                removeItem()
                toggleModal()
            }}>
                Delete
            </button>
        </div>
    </div>
  )
}

Modal.PropTypes = {
    toggleModal:PropTypes.func.isRequired,
    removeItem:PropTypes.func.isRequired,
}
