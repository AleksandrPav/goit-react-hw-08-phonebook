import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './contact-actions';
import { getContacts, postContact, deleteContact } from './contact-operations';

const contactsReducer = createReducer([], {
  [getContacts.fulfilled]: (_state, { payload }) => payload,
  [postContact.fulfilled]: addContact,
  [deleteContact.fulfilled]: delContact,
});

const loadingReducer = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,

  [postContact.pending]: () => true,
  [postContact.fulfilled]: () => false,
  [postContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const errorReducer = createReducer(null, {
  [getContacts.rejected]: (_state, { payload }) => payload.message,
  [getContacts.pending]: () => null,

  [postContact.rejected]: (_state, { payload }) => payload.message,
  [postContact.pending]: () => null,

  [deleteContact.rejected]: (_state, { payload }) => payload.message,
  [deleteContact.pending]: () => null,
});

const filterReducer = createReducer('', {
  [changeFilter]: (_state, { payload }) => payload,
});

function addContact(contacts, { payload }) {
  const { id, name, phone } = payload;
  const isFound = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase(),
  );
  if (isFound) return window.alert(`${name} is already in contacts.`);
  return [{ id, name, phone }, ...contacts];
}

function delContact(contacts, { payload }) {
  return contacts.filter(({ id }) => id !== payload);
}

export default combineReducers({
  items: contactsReducer,
  loading: loadingReducer,
  error: errorReducer,
  filter: filterReducer,
});