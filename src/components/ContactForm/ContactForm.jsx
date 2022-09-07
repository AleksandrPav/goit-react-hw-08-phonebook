import React, { useState } from "react";
import css from "./ContactsForm.module.css";

const ContactsForm = ({ onSubmit, contacts, deleteContact }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, number });
        findDuble();
        setName("");
        setNumber("");
    }

    const findDuble = () => {
        if (contacts.find(contact => contact.name === name && contact.number === number)) {
            alert(`${name} is already exists`);
            deleteContact(name);
        }
    }

    const onChangeInput = (e) => {
    const { name, value } = e.target;
    name === "name" ? setName(value) : setNumber(value);
    }

    return (
            <div className={css.form__contact}>
            <form onSubmit={handleSubmit}>
                <div className={css.form__item}>
                    <label className={css.form__label}>Name:</label>
                        <input
                        className={css.form__input}
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChangeInput}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        itle="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </div>
                <div className={css.form__item}>
                    <label className={css.form__label}>Number:</label>
                        <input
                        className={css.form__input}
                        type="text"
                        name="number"
                        value={number}
                        onChange={onChangeInput}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </div>
               
                    <button className={css.form__btnAdd} type="submit">Add contact</button>
               
                </form>
            </div>
        );
}

export default ContactsForm;

