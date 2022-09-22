import { useSelector } from 'react-redux';

import ContactsForm from 'components/modules/ContactForm/ContactForm';
import Filter from 'components/modules/Filter/Filter';
import ContactsList from 'components/modules/ContactList/ContactList';
import { ColorRing } from 'react-loader-spinner';
import { getLoading, getError } from 'redux/contact/contact-selectors';

import css from './ContactPage.module.css';

const ContactPage = () => {
  const isLoading = useSelector(getLoading);
  const errorMsg = useSelector(getError);
  return (
    <div className={css.container}>
      <div className={css.containerMenu}>
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
};

export default ContactPage;
