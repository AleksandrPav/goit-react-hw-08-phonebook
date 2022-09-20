import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contact/contact-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
