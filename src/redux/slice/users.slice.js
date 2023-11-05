import { createSlice } from '@reduxjs/toolkit';
import { register, signIn } from 'redux/actions/users.actions';

const initialState = {
  name: null,
  email: null,
  token: null,
  isRegistered: false,
  isLoggedIn: false,
  isRefreshing: false,
  avatar: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.isRegistered = true;
      })
      .addCase(register.rejected, state => {
        state.isRegistered = false;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signIn.rejected, state => {
        state.isLoggedIn = false;
      });
  },
});

export const usersReducer = usersSlice.reducer;
