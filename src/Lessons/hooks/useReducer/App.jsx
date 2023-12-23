import React, { useEffect, useReducer } from 'react'
import reducer, { initialState } from './reducer'
<<<<<<< HEAD
import { ADD_COUNT, FILL_ARRAY,ADD_POSTS } from './actionTypes'
import axiosOptions from '../../../helpers/axios.d'
import axios from 'axios'

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleClick = () => {
    dispatch({type:ADD_COUNT,payload:32 })


    }

    const deleteClick = () =>{
    dispatch({type:FILL_ARRAY})
    }

    useEffect(() => {
        axios(axiosOptions('posts', 10))
    .then(res => dispatch({type: ADD_POSTS,payload : {posts: res.data}}))
    }, [])
    

  return (
    <div>
        <h1>State : {JSON.stringify(state)}</h1>
        <button onClick={handleClick}>add count</button>
        <button onClick={deleteClick}>FILL_ARRAY</button>
=======
import { ADD_COUNT, ADD_POSTS, FILL_ARRAY, UPDATE_POSTS } from './actionTypes';
import axios from 'axios';
import axiosOptions from '../../../helpers/axios.d';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (type) => {

    if (type === ADD_COUNT) {
      dispatch({ type: ADD_COUNT, payload: 32 })
    } else if (type === FILL_ARRAY) {
      dispatch({ type: FILL_ARRAY })
    }
  }


  useEffect(() => {
    axios(axiosOptions('posts', 10))
      .then(res => dispatch({ type: ADD_POSTS, payload: { posts: res.data } }))
  }, [])


  const updatedID = () => {
    dispatch({ type: UPDATE_POSTS })
  }

  return (
    <div>
      <h1>State : {JSON.stringify(state)}</h1>
      <button onClick={() => handleClick(FILL_ARRAY)}>FILL_ARRAY</button>
      <button onClick={() => handleClick(ADD_COUNT)}>add count</button>
      <button onClick={updatedID}>updated ID s</button>
>>>>>>> 340b5e19c2e3d2794cb78d258557759ea0eb766a
    </div>
  )
}
