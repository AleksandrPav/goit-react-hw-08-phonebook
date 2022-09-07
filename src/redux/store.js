import { createStore } from 'redux';


const initialStore = {
  contacts: {
        items: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }
}

const reducer = (store) => {
    return store;
}

const store = createStore(reducer, initialStore);

export default store;