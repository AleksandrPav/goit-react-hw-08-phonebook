import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postContact } from '../../redux/contact/contact-operations';
import { changeFilter } from '../../redux/contact/contact-actions';

import css from "./ContactsForm.module.css";

const ContactsForm = ({ onSubmit, contacts, deleteContact }) => {
        const [name, setName] = useState('');
        const [phone, setPhone] = useState('');
        const dispatch = useDispatch();

    const handleSubmit =  e => {
    e.preventDefault();
    dispatch(postContact({ name, phone }));
    dispatch(changeFilter(''));
    setName('');
    setPhone('');
  };

       const onChangeInput = ({ target: { name, value } }) => {
    if (name === 'name') return setName(value);
    setPhone(value);
  };

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
                        value={phone}
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

