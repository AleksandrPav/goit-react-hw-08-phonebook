import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contact/contact-reducer';
import filterReducer from './filter/filter-reducer';


const reducer = {

    items: contactReducer,
    filter: filterReducer,
}

const store = configureStore({
  reducer,
 
});


export default store;