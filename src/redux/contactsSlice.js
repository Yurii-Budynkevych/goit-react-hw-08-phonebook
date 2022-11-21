import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsOperation,
  addContactOperation,
} from './operations/contactsOperations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { isLoading: false, error: null, items: [] },
  reducers: {
    sub(state, action) {
      state.items.push(action.payload);
    },
    del(state, action) {
      return state.items.filter(contact => contact.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchContactsOperation.pending]: state => {
      state.isLoading = true;
    },
    [fetchContactsOperation.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [fetchContactsOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addContactOperation.pending]: state => {
      state.isLoading = true;
    },
    [addContactOperation.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [addContactOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

// actions
export const { sub, del } = contactsSlice.actions;
