import PropTypes from 'prop-types'


export default function Child(elem) {
  return (
    <div className="App__list__item" key={elem.id}>
        <img src={elem.image}  />
        <div className='content'>
            <h2>{elem.title}</h2>
            <p>{elem.description}</p>
            <button>Go Somewere</button>
        </div>
        
    </div>
  )
}


Child.defaultProps = {
    
}

Child.propTypes = {
    elem:PropTypes.exact({
        id:PropTypes.number,
        title:PropTypes.string,
        image:PropTypes.string,
        description:PropTypes.string,

    })
}

