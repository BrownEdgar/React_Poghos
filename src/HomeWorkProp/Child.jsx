
import PropTypes from 'prop-types'

function Child({elem,removeItem}) {
  return (
    <div className="App__Menu__item">
      <span className='App__icon' onClick={ () => removeItem(elem.id)}>
          <i className='bx bx-x'></i>
      </span>
      <img src={elem.image}/>
       <div className='content'>
          <h2>{elem.title}</h2>
          <p>{elem.description}</p>
       </div>
    </div>
  )
}


Child.propTypes = {
elem:PropTypes.exact({
    id:PropTypes.number,
    title:PropTypes.string,
    image:PropTypes.string,
    description:PropTypes.string,
}),
removeItem:PropTypes.func.isRequired
}

export default Child