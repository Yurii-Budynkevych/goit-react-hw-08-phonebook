import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, deleteContact, addContact } from 'utils/mockAPI';

export const fetchContactsOperation = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactOperation = createAsyncThunk(
  'contacts/addContact',
  async (values, thunkApi) => {
    try {
      const contact = await addContact(values);
      return contact.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
