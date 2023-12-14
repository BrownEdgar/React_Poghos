import { ADD_COUNT, ADD_POSTS, FILL_ARRAY } from './actionTypes';

export const initialState = {
  data: [],
  posts: [],
  count: 0
}

const fillArray = (state) => {
  const arr = new Array(10)
    .fill()
    .map(() => Math.ceil(Math.random() * 100))
  return {
    ...state,
    data: [...arr]
  }
}


function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNT: return {
      ...state,
      data: [...state.data, action.payload]
    };
    case FILL_ARRAY: return fillArray(state);
    case ADD_POSTS: return { ...state, posts: action.payload.posts }



    default: return state
  }
}

export default reducer