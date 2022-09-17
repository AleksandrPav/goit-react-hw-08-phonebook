import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import contactReducer from './contact/contact-reducer';
import filterReducer from './filter/filter-reducer';

const rootReducer = combineReducers({
  items: contactReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
 
});


export const persistor = persistStore(store);
