import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import postsSlice from "../features/posts/postsSlice";
import usersSlice from "../features/users/usersSlice";

export default configureStore({
    reducer:{
        users:usersSlice,
        counter:counterSlice,
        posts:postsSlice
    }
})
