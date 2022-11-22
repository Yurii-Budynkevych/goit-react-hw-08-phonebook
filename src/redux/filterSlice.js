import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterSliseReducer(_, action) {
      return action.payload;
    },
  },
});

// actions
export const { filterSliseReducer } = filterSlice.actions;
