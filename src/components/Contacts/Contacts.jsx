import ContactForm from 'components/Contacts/ContactForm';
import Filter from 'components/Contacts/Filter';
import ContactList from 'components/Contacts/ContactList';
import css from './Contacts.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <div className={css.phonebook_form}>
        <ContactForm />
        <Filter />
      </div>
      <div className={css.phonebook_form}>
        <ContactList />
      </div>
    </div>
  );
}
