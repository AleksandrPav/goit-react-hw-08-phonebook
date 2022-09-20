import { createAsyncThunk } from '@reduxjs/toolkit';
import { getItems, postItem, deleteItem } from '../../shared/api/contacts';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_state, { rejectWithValue }) => {
    try {
      return await getItems();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const postContact = createAsyncThunk(
  'contacts/postContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await postItem(contact);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteItem(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);