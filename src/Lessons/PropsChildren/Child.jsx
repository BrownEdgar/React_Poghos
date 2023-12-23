import PropTypes from 'prop-types'

<<<<<<< HEAD

import './Child.scss'


export default function Child({children,size,title}) {
  return (
    <div className={`Child Child__${size}`}>
    <h2 className='Child__title'>{title}</h2>
    {children}

=======
import './Child.scss'

export default function Child({ children, size, title }) {
  return (
    <div className={`Child Child__${size}`}>
      <h2 className='Child__title'>{title}</h2>
      {children}
>>>>>>> 340b5e19c2e3d2794cb78d258557759ea0eb766a
    </div>
  )
}

<<<<<<< HEAD

Child.defaultProps = {
    title:"Component default title",
    size:"md"
}
=======
Child.defaultProps = {
  title: "Component default title",
  size: 'md'
}
>>>>>>> 340b5e19c2e3d2794cb78d258557759ea0eb766a
