import ContactForm from 'components/Contacts/ContactForm';
import Filter from 'components/Contacts/Filter';
import ContactList from 'components/Contacts/ContactList';

export default function App() {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
