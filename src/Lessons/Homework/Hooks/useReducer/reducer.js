import { ADD_DEV, DEL_POST, GET_POSTS, SHUFFLE_ARR,UPDATE_POST_ID } from "./actionTypes"
import _ from 'lodash'


export const initialState = {
    actions: 0,
    developers: [],
    posts: [],
    arr:[154,42,1,87,695,36,2,10,39,9]
  }


function reducer(state=initialState,action){
    switch(action.type){
        case GET_POSTS:
            return {...state,posts:action.payload.posts};
        case ADD_DEV:
            return {...state,developers:[...state.developers,action.payload.name],actions:state.actions+1};
        case SHUFFLE_ARR:
            return{...state,
                arr:_.shuffle(state.arr),
                actions:state.actions+1
            }
        case DEL_POST:
            return {...state,posts:state.posts.filter(post => post.id !== action.payload),actions:state.actions+1}
        case UPDATE_POST_ID:
            return {...state,posts:state.posts.map((post,index) => {
                return {...post, id:state.arr[index] } 
            }),
            actions:state.actions+1
        }
        default: return state
    }
}
export default reducer