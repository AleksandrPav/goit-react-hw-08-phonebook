// import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from './types';




// const initialStore = {
//   contacts: {
//         items: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     filter: ''
//   }
// }

// const reducer = (store = initialStore, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       const newContact = [...store.contacts.items, payload];
//       return { ...store, contacts: { ...store.contacts, items: newContact } };
//     case DELETE_CONTACT:
//       const newContacts = store.contacts.items.filter(({ id }) => id !== payload);
//       return { ...store, contacts: { ...store.contacts, items: newContacts } };
//     case CHANGE_FILTER:
//       return { ...store, contacts: { ...store.contacts, filter: payload } };
//     default:
//       return store;
//   }

// }

// export default reducer;