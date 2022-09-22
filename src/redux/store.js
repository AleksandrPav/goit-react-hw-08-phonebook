import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contact/contact-reducer';
import authReducer from '../redux/auth/auth-slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
