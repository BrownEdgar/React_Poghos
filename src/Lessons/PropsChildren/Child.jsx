<<<<<<< HEAD
import './Child.scss'
import PropTypes from 'prop-types'

export default function Child({ children,size,title }) {
  return (
    <div className={`Child Child__${size}`}>
        <h2 className='Child__title'>{title}</h2>
=======
import PropTypes from 'prop-types'

import './Child.scss'

export default function Child({ children, size, title }) {
  return (
    <div className={`Child Child__${size}`}>
      <h2 className='Child__title'>{title}</h2>
>>>>>>> 2295e469cc115c9befa8bd29a66e7c21753c84f2
      {children}
    </div>
  )
}

<<<<<<< HEAD

Child.defaultProps = {
    title:"Component default title",
    size:"md",
}
=======
Child.defaultProps = {
  title: "Component default title",
  size: 'md'
}
>>>>>>> 2295e469cc115c9befa8bd29a66e7c21753c84f2
