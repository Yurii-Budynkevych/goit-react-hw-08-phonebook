import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  fetchCurrentUser,
} from './operations/authOperations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    error: null,
  },
  extraReducers: {
    [register.pending]: (state, action) => {},
    [register.fulfilled](state, action) {
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    // _____________________________________________________
    [login.pending]: (state, action) => {},
    [login.fulfilled]: (state, action) => {
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    // _______________________________________________________
    [fetchCurrentUser.pending]: (state, action) => {},
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.error = null;
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    // ________________________________________________________
    [logout.pending]: (state, action) => {},
    [logout.fulfilled]: (state, action) => {
      state.error = null;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});
