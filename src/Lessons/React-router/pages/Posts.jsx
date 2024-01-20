import { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetchData from '../../hooks/CustomHooks/useFetchData'
import Pagination from '../components/Pagination/Pagination';
import PostsLoader from '../../Loaders/PostLoader'

export default function Posts() {
  const [page, setPage] = useState(1);
  const [perPage] = useState(7);

  const [data, loading, error] = useFetchData({
    url: 'https://jsonplaceholder.typicode.com/posts',
    limit: perPage,
    start: (page * perPage) - perPage
  })




  if (loading) {
    return <div className="loader">
      <PostsLoader />
    </div>
  }

  const changePage = (n) => setPage(() => n)

  return (
    <div className='Posts'>
      <div className='PostList'>
        {
          data?.map(post => {
            return (
              <Link
                key={post.id}
                className="PostList__item"
                to={`/posts/${post.id}`}
              >
                {post.title}
              </Link>
            )
          })
        }
      </div>
      <Pagination total={100} perPage={perPage} changePage={changePage} />
    </div>
  )
}