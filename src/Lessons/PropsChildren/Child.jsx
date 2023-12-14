import './Child.scss'
import PropTypes from 'prop-types'

export default function Child({ children,size,title }) {
  return (
    <div className={`Child Child__${size}`}>
        <h2 className='Child__title'>{title}</h2>
      {children}
    </div>
  )
}


Child.defaultProps = {
    title:"Component default title",
    size:"md",
}