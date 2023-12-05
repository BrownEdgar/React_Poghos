import './Modal.scss'
import PropTypes from 'prop-types';


export default function Modal({ toggleModal , removeItem}) {
  return (
    <div className='Modal'>
        <div className='Modal__content'>
            <h1 className='Modal__title'>Delete this story?</h1>
            <button onClick={() => {
                toggleModal();
                removeItem();
            }}>Delete</button>
            <button onClick={toggleModal}>Cancel</button>
        </div>
    </div>
  )
}

Modal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
}
