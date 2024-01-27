import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

import './Post.scss'
import axios from 'axios';

export default function Post() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios(`http://localhost:3000/posts/${id}`)
      .then(res => setPost(res.data))
  }, [id])

  console.log(post)

  return (
    <div className='Post'>
      <Link to='/'>go back</Link>
      <h1>post N <span>{id}</span></h1>
      <div className="Post__Content">
        {post.image && <img src={post.image} alt={post.title} />}
        <div>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  )
}

