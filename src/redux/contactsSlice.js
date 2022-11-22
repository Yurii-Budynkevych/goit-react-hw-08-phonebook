import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsOperation,
  addContactOperation,
  delContactOperation,
} from './operations/contactsOperations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { isLoading: false, error: null, items: [] },
  reducers: {},
  extraReducers: {
    [fetchContactsOperation.pending]: state => {
      state.isLoading = true;
    },
    [fetchContactsOperation.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContactsOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // ____________________________________________________________________________________
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
    // ____________________________________________________________________________________
    [delContactOperation.pending]: state => {
      state.isLoading = true;
    },
    [delContactOperation.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(contact => contact.id !== payload);
    },
    [delContactOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
