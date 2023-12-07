import PropTypes from 'prop-types'


export default function Child({elem ,saveId,toggleModal}) {
  return (
    <div className="App__list__item" key={elem.id}>
        <span className='App_icon'onClick={() => {
            toggleModal();
            saveId(elem.id)
        }}>
            <i className='bx bx-x'></i>
        </span>
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
        
    }),
    toggleModal:PropTypes.func.isRequired,
    saveId:PropTypes.func.isRequired,
}

