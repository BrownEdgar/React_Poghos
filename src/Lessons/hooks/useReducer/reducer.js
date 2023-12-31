import { ADD_COUNT, ADD_POSTS, FILL_ARRAY, UPDATE_POSTS } from './actionTypes';

export const initialState = {
  data: [],
  posts: [],
  count: 0,
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

const postsUpdate = (state) => {
  const result = state.posts.map((post, index) => {
    post.id = state.arr[index];
    return post;
  })

  return {
    ...state,
    posts: result
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
    case UPDATE_POSTS: return postsUpdate(state);

    default: return state
  }
}

export default reducer