import PropTypes from 'prop-types'

import './Child.scss'

export default function Child({ children, size, title }) {
  return (
    <div className={`Child Child__${size}`}>
      <h2 className='Child__title'>{title}</h2>
      {children}
    </div>
  )
}

Child.defaultProps = {
  title: "Component default title",
  size: 'md'
}

Child.propTypes = {
  size:PropTypes.string,
  title:PropTypes.string,
  children:PropTypes.any

}