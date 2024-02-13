import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getPosts from "./postsAPI";


export const getAsyncPosts = createAsyncThunk(
'posts/getAsync',
    // async () => getPosts()
    getPosts
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
        builder
        .addCase(getAsyncPosts.pending,(state,action) => {
            state.loading = true
        })
        .addCase(getAsyncPosts.rejected,(state,action) => {
            state.loading = false
            state.error = action.error
        })
        .addCase(getAsyncPosts.fulfilled,(state,action) => {
            state.data = action.payload
            state.loading = false
            state.error = null

        })
    }

    


})

export default postsSlice.reducer
export const {savePosts} = postsSlice.actions