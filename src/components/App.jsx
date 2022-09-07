import React from "react";
import ContactsForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactList/ContactList";
// import { nanoid } from "nanoid";
import css from "./App.module.css";

import { useSelector } from "react-redux";



const App = () => {

  const contacts = useSelector((store) => store.contacts.items);
  const filter = useSelector((store) => store.contacts.filter);
 
  
  // const[contacts, setContacts] = useState([
  //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  // ]);
  // const [filter, setFilter] = useState('');

  
//  const onFilterChange = (e) => {
//     setFilter(e.target.value);
//   }

  // const deleteContact = (id) => {
  //   const newContacts = contacts.filter(contact => contact.id !== id);
  //   setContacts(newContacts);
  // }
  // const fomSubmitHeader = (contact) => {
  //   const newContact = {
  //     id: nanoid(),
  //     name: contact.name,
  //     number: contact.number,
  //   };
  //   setContacts([...contacts, newContact]);
  //   console.log(contacts);
  // }

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // } , [contacts]);


  return (
    <div className={css.container}>
      <div className={css.header}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactsForm
          // onSubmit={fomSubmitHeader}
          contacts={contacts}
          // deleteContact={deleteContact}
        />
       
        <h2 className={css.title}>Contacts</h2>
        <Filter
          filter={filter}
          // onFilterChange={onFilterChange}
        />
        <ContactsList
          contacts={contacts}
          filter={filter}
          // deleteContact={deleteContact}
       />
      </div>
    </div>
  );
}
  


export default App;
