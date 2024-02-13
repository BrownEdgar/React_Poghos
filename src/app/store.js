import counterSlice from "@f/counter/counterSlice";
import postsSlice from "@f/posts/postsSlice";
import usersSlice from "@f/users/usersSlice";
import { configureStore } from "@reduxjs/toolkit";


export default configureStore({
    reducer:{
        users:usersSlice,
        counter:counterSlice,
        posts:postsSlice
    }
})
