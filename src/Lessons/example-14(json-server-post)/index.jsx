
import { useState, useEffect } from 'react';
import MainForm from './MainForm/MainForm'
import classNames from 'classnames';
import Posts from './Posts/Posts'
import axios from 'axios';

import './App.scss';
import { Route, Routes, useMatch } from 'react-router-dom';
import Post from './Post/POst';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loaging, setLoaging] = useState(false)

  useEffect(() => {
    if (!loaging) {
      axios('http://localhost:3000/posts/1')
        .then(res => {
          console.log(res)
          setPosts(res.data.data)
        })
        .catch(console.log)
    }
  }, [setLoaging, loaging])

  const match = useMatch('/');

  return (
    <div className='App '>
      <div className={classNames("App__Form", {
        hidden: !match
      })}>
        {
          match ? (
            <MainForm setLoaging={setLoaging} />
          ) : null
        }
      </div>
      <div className={classNames('App__Posts', {
        'App__Posts-loading': loaging
      })}>
        <Routes>
          <Route path='/' element={<Posts posts={posts} />} />
          <Route path='/posts/:id' element={<Post />} />
        </Routes>
      </div>
    </div>
  )
}
