import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from 'services/contactsApi';
import { usersApi } from 'services/usersApi';
import filterReducer from './filterSlice';
import tokenReducer from './tokenSlice';

const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  filter: filterReducer,
  token: tokenReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    contactsApi.middleware,
    usersApi.middleware,
  ],
});
export default store;

setupListeners(store.dispatch);
