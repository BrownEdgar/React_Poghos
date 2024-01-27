import PropTypes from 'prop-types';
import { truncate } from '../helpers';
import { Link } from 'react-router-dom'
import './Posts.scss'

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  )
}

export default function Posts({ posts }) {

  return (
    <div className='Posts'>
      {
        posts.map(elem => {
          return (
            <Link className="Posts__item" key={elem.id} to={`/posts/${elem.id}`}>
              <img src={elem.image} />
              <div className="info">
                <h2>{elem.title}</h2>
                {truncate(elem.body, 200)}
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}
