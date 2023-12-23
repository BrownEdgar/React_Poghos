<<<<<<< HEAD
import {useState,useEffect} from 'react'
import axios from 'axios'
import instance from './axsios'
import './App.scss'


export default function App() {
 const [data, setData] = useState([])
 const axiosOptions = (limit = 10,start = 0) =>{
    return{
        params:{
            _limit:limit,
            _start:start
        }
    }
 }

 useEffect(() =>{
    //   axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    // axios({
    //     baseURL:'https://jsonplaceholder.typicode.com/',
    //     url:'posts',
    //     timeout:1000,
    //     params:{
    //         _limit:10,
    //         _start:10
    //     }
    // })
    // axios('posts', axiosOptions(100))
    // axios.all([
    //     instance('posts',axiosOptions(5)),
    //     instance('users',axiosOptions(5)),
    //     instance('comments',axiosOptions(5)),
    // ])
    //   .then(([posts,users,comments]) => {
    //         console.table([posts,users,comments]);
    //         // setData(res.data)
    //   }).catch(err => console.log(err))
    const data = {
        title: 'dasdasdasdasdasdas',
    }
    axios.patch('https://jsonplaceholder.typicode.com/posts/1',data)
    .then(res =>console.log(res))
 },[])


  return (
    <div className='Posts'>
    {
        data.map(post =>{
            return(
                <div key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                  <span>{post.id}</span>
                </div>
            )
        })
    }
=======
import { useState, useEffect } from 'react';
import axios from 'axios'
import instance from './axios'

import './App.scss'

export default function App() {
  const [data, setData] = useState([]);
  const axiosOptions = (limit = 10, start = 0) => {
    return {
      params: {
        _limit: limit,
        _start: start
      }
    }
  }

  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    // axios({
    //   baseURL: 'https://jsonplaceholder.typicode.com/',
    //   url: 'posts',
    //   timeout: 1000,
    //   params: {
    //     _limit: 10,
    //     _start: 20
    //   }
    // })
    // axios('posts', axiosOptions(100))
    // axios.all([
    //   instance('posts', axiosOptions(10)),
    //   instance('users', axiosOptions(10)),
    //   instance('comments', axiosOptions(10)),
    // ])
    //   .then(([posts, users, comments]) => {
    //     console.table([posts.data, users.data, comments.data])
    //   })
    //   .catch(err => console.log(err))
    const data = {
      title: 'Lorem ipsum dolor sit.',
    }
    axios.patch('https://jsonplaceholder.typicode.com/posts/1', data)
      .then(res => console.log(res))
  }, [])

  return (
    <div className='Posts'>
      {
        data.map(post => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <span>{post.id}</span>
            </div>
          )
        })
      }
>>>>>>> 340b5e19c2e3d2794cb78d258557759ea0eb766a
    </div>
  )
}
