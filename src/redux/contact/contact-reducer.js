import { ADD_CONTACT, DELETE_CONTACT} from './contact-types';




const initialStore = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];


const contactReducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...store, payload];
    case DELETE_CONTACT:
     return store.filter(({ id }) => id !== payload);
     
    default:
      return store;
  }
}

export default contactReducer;