 import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ROUTES from '../routes';
import useFetchData from '../../hooks/CustomHooks/useFetchData';


export default function Post() {
  const params = useParams()
  const [postId, setPostId] = useState(params.id)
  const [post, loading, error] = useFetchData({
    // url: `http://localhost:3000/posts/${postId}`
    url: `https://jsonplaceholder.typicode.com/posts/${postId}`

  })

  const navigate = useNavigate()
  console.log(error)

  if (error) {
    return <div className="Post">
      <h3>not found</h3>
      <p>{error.message}</p>
    </div>
  }

  const goBack = () => {
    navigate(ROUTES.POSTS)
  }
  const next = () => {
    setPostId((prevId) => parseInt(prevId) + 1)
  }
  const prev = () => {
    setPostId((prevId) => parseInt(prevId) - 1)
  }

  const deletePost = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(() => {
        navigate(ROUTES.POSTS)
      })
  }
  return (
    <div>
      <h2>Welcome to the post N {postId}</h2>
      <button onClick={goBack}>All posts</button>
      <div className="Post">
        <h3>{post?.title}</h3>
        <p>{post?.body}</p>
        <div className="buttons">
          <button className="prev" onClick={prev}>prev</button>
          <button className="delete" onClick={deletePost}>delete post</button>
          <button className="next" onClick={next}>next</button>
        </div>
      </div>
    </div>
  )
}
