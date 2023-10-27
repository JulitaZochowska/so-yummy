import { createSlice } from '@reduxjs/toolkit';
import { register } from 'redux/actions/users.actions';

const initialState = {
  name: null,
  email: null,
  token: null,
  isRegistered: false,
  isLoggedIn: false,
  isRefreshing: false,
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
      });
  },
});

export const usersReducer = usersSlice.reducer;
