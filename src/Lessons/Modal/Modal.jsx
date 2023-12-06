import PropTypes from 'prop-types';

import './Modal.scss'

export default function Modal({ toggleModal, removeItem }) {
  return (
    <div className='Modal'>
      <div className='Modal__content'>
        <h1 className='Modal__title'>Delete this city?</h1>
        <button onClick={toggleModal}>Cancel</button>
        <button onClick={() => {
          removeItem();
          toggleModal()
        }}>Delete</button>
      </div>
    </div>
  )
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
}
