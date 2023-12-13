import PropTypes from 'prop-types'

import './Child.scss'

export default function Child({ children, size,elem,toggleModal,saveId}) {
  return (
    <div className={`Child Child__${size}`}>
            <span className='Child__icon' onClick={() => {
        toggleModal();
        saveId(elem.id)
      }}>
        <i className='bx bx-x'></i>
      </span>
      
      {children}
    </div>
  )
}

Child.defaultProps = {
  size: 'md'
}

Child.propTypes = {
  size:PropTypes.string,
  children:PropTypes.any,
  elem:PropTypes.any,
  toggleModal:PropTypes.func,
  saveId:PropTypes.func
}