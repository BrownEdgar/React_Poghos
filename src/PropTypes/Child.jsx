import PropTypes from 'prop-types'

export default function Child(props) {
  return (
    <div>
        <h1>
{props.title}
v-({props.version})
        </h1>
    </div>
  )
}

Child.defaultProps= {
    
}




Child.propTypes = {







}