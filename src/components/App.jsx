import { useSelector } from 'react-redux';
import { getLoading, getError } from "../redux/contact/contact-selectors";

import { ColorRing } from 'react-loader-spinner';


import css from './App.module.css';

import ContactsForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactList/ContactList';



const App = () => {

  const isLoading = useSelector(getLoading);
  const errorMsg = useSelector(getError)

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactsForm />       
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        {isLoading && <ColorRing color="#ffaa00" height={80} width={80} />}
        <ContactsList />
        {errorMsg && <p>{errorMsg}</p>}
      </div>
    </div>
  );
}
  


export default App;
