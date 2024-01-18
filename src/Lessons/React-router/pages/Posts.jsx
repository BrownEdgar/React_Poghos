import { Link } from 'react-router-dom'
import useFetchData from '../../hooks/CustomHooks/useFetchData'

export default function Posts() {
  const [data, loading, error] = useFetchData({
    url: 'http://localhost:3000/posts'
  })


  console.log(data)

  if (loading) {
    return <h1>Loading....</h1>
  }

  return (
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
  )
}