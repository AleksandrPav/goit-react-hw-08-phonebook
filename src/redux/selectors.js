import { createSelector } from '@reduxjs/toolkit';
import { contactsApi } from 'services/contactsApi';

export const getContacts = contactsApi.endpoints.getItems.select();

export const getFilter = state => state.filter;
export const getToken = state => state.token;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  ({ data }, filterValue) => {
    if (data)
      return data.filter(({ name }) =>
        name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    return [];
  },
);
