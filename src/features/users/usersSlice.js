import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getUsers from "./usersAPI";
// import getUsers from "./usersAPI";

// export const getAsyncUsers =  createAsyncThunk(
//     'users/getAsync',
//     // getUsers
// )

export const getAsyncUsers = createAsyncThunk(
    'users/getAsyncUsers',
     getUsers
)

const usersSlice = createSlice({
    name:'users',
    initialState:{
       data:[],
       loading:false,
       error:null 
    },

    reducers:{
        deleteUsersById(state,action){
           state.data =  state.data.filter(elem  => elem.id !== action.payload)
           return state
        },
        addUser(state,action){
           state.data.push(action.payload)
            return state
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(getAsyncUsers.pending,(state,action) => {
            state.loading = true
        })
        .addCase(getAsyncUsers.rejected,(state,action) => {
            state.loading = false
            state.error = action.error

        })
        .addCase(getAsyncUsers.fulfilled,(state,action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
        })
    },
    selectors:{
        usersSelector:(state) => state
    }
})

export default usersSlice.reducer
export const { deleteUsersById,addUser } = usersSlice.actions
export const { usersSelector } = usersSlice.selectors 
