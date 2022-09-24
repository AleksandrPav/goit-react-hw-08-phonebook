import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getItems: builder.query({
      query: () => ({ url: '/contacts', method: 'GET' }),
      providesTags: ['Contact'],
    }),
    postItem: builder.mutation({
      query: contact => ({ url: '/contacts', method: 'POST', data: contact }),
      invalidatesTags: ['Contact'],
    }),
    deleteItem: builder.mutation({
      query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const { useGetItemsQuery, usePostItemMutation, useDeleteItemMutation } =
  contactsApi;
