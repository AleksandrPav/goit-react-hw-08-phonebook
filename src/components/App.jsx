import React from "react";
import ContactsForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactList/ContactList";
import css from "./App.module.css";

import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact } from "redux/contact/contact-actions";
import changeFilter from "redux/filter/filter-actions";

import getContacts from "redux/contact/contact-selectors";
import getFilter from "redux/filter/filter-selectors";



const App = () => {

  
  const contacts = {
    items: useSelector(getContacts),
    filter: useSelector(getFilter),
  }

  const dispatch = useDispatch();
 
  const onAddContact = (payload) => {
    const action = addContact(payload);
    dispatch(action);
  };

  const onDeleteContact = (payload) => {
    dispatch(deleteContact(payload));
  };

  const onChangeFilter = ({target}) => {
    dispatch(changeFilter(target.value));
  };

  const { items, filter } = contacts;

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactsForm
          onSubmit={onAddContact}
          contacts={items}
          deleteContact={onDeleteContact}
        />
       
        <h2 className={css.title}>Contacts</h2>
        <Filter
          filter={filter}
          onFilterChange={onChangeFilter }
        />
        <ContactsList
          contacts={items}
          filter={filter}
          deleteContact={onDeleteContact}
       />
      </div>
    </div>
  );
}
  


export default App;
