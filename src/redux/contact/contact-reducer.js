import { addContact, deleteContact, fetchContactsError, fetchContactsSuccess,fetchContactsLoading} from "./contact-actions";
import { createReducer } from "@reduxjs/toolkit";

const initialStore = {
  items: [],
  loading: false,
  error: null,
}

const contactReducer = createReducer(initialStore, {
  [fetchContactsLoading]: (store) => {
    store.loading = true;
    store.error = null;
  },
  [fetchContactsSuccess]: (store, { payload }) => {
    store.items = payload;
    store.loading = false;
    store.error = null;
  },
  [fetchContactsError]: (store, { payload }) => {
    store.loading = false;
    store.error = payload;
  },
  
  [addContact]: (store, { payload }) => {
    return [...store, payload];
  },
  [deleteContact]: (store, { payload }) => {
    return store.filter((contact) => contact.id !== payload);
  },
});

export default contactReducer;