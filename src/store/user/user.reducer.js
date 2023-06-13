import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) { // shorthand for setCurrentUser: () => {}
      state.currentUser = action.payload // not actually mutating the state, an easier way to write it with redux toolkit
    }
  }
})

export const { setCurrentUser } = userSlice.actions

export const userReducer = userSlice.reducer