import React from "react";
import ContactsForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactList/ContactList";
import css from "./App.module.css";

import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact, changeFilter } from "redux/actions";
import { getContacts, getFilter } from "redux/selectors";

const App = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

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

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactsForm
          onSubmit={onAddContact}
          contacts={contacts}
          deleteContact={onDeleteContact}
        />
       
        <h2 className={css.title}>Contacts</h2>
        <Filter
          filter={filter}
          onFilterChange={onChangeFilter }
        />
        <ContactsList
          contacts={contacts}
          filter={filter}
          deleteContact={onDeleteContact}
       />
      </div>
    </div>
  );
}
  


export default App;
