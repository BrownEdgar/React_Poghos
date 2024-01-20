import './Pagination.css'
import PropTypes from 'prop-types'

export default function Pagination({ total, perPage, changePage }) {
  const numbers = [];
  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    numbers.push(i)
  }
  return (
    <div className='Pagination'>
      <ul className='Pagination__List'>
        {
          numbers.map(pageNumber => {
            return <li key={pageNumber} onClick={() => changePage(pageNumber)}>
              {pageNumber}
            </li>
          })
        }
      </ul>
    </div>
  )
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
}