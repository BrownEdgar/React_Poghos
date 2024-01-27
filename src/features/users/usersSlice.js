import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [{
  id: 1,
  usrname: 'Sebastian'
}]

const usersSlice = createSlice({
  name: 'users',
  initialState: initialStateValue,
  reducers: {
    addUser(state, action) {
      if (!state.includes(action.payload.username)) {
        state.push(action.payload.username);
      } else {
        return state;
      }
    }
  }
})

export default usersSlice.reducer;
export const { addUser } = usersSlice.actions