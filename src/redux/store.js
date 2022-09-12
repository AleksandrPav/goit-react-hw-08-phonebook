import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contact/contact-reducer';
import filterReducer from './filter/filter-reducer';

const store = configureStore({
  reducer: {
    items: contactReducer,
    filter: filterReducer,
  },
 
});


export default store;