import React from "react";
import css from "./ContactsList.module.css";

const ContactsList = ({ contacts, filter, deleteContact }) => {
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
        <ul className={css.list}>
        {filteredContacts.map(contact => (
            <li className={css.list__items} key={contact.id}>
            <p className={css.list__name}>{contact.name}: {contact.number}</p>
            <button className={css.list__btn} onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
        ))}
        </ul>
    );
}





export default ContactsList;