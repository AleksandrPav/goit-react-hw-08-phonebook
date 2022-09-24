import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { useGetItemsQuery } from 'services/contactsApi';
import { getFilteredContacts, getToken } from 'redux/selectors';
import Contact from 'components/Contacts/ContactList/Contact';
import s from './ContactList.module.css';

export default function ContactList() {
  const token = useSelector(getToken);
  const { isError, error } = useGetItemsQuery();
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <Container>
      <ul className={s.contacts}>
        {token &&
          filteredContacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
      </ul>
      {isError && <p>{error.status}</p>}
    </Container>
  );
}
