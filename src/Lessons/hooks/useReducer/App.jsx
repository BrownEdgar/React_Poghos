import { useEffect, useReducer } from "react"
import reducer, { initialState } from "./reducer"
import { ADD_COUNT, ADD_POSTS, FILL_ARRAY,} from "./actionTypes"
import { axiosOptions } from "../../../helpers/axios.d"
import axios from 'axios'



export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleClick = () => {
        dispatch({type: ADD_COUNT, payload:12})

    }
    const handleClick2 = () =>{
        dispatch({type: FILL_ARRAY})
    }

    useEffect(() => {
      axios(axiosOptions('posts',10))
      .then(res => dispatch({type: ADD_POSTS, payload:{ posts: res.data } }))
    },[])

  return (
    <div>
        <h1>State : {JSON.stringify(state)}</h1>
        <button onClick={handleClick}>add count</button>
        <button onClick={handleClick2}>Fill array</button>
    </div>
    
  )
}
