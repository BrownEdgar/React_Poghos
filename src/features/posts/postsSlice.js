import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncPosts = createAsyncThunk(
    'posts/getAsync',
    async () => {
       return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.data)
    }
)

const postsSlice = createSlice({
    name:'posts',
    initialState:{
        data:[],
        loading:false,
        error:null
    },
    reducers:{
        // savePosts(state,action){
        //     state.data = action.payload
        // }
    },
    extraReducers:(builder) => {
        builder.addCase(getAsyncPosts.fulfilled,(state,action) => {
            state.data = action.payload
        })
    }

    


})

export default postsSlice.reducer
export const {savePosts} = postsSlice.actions