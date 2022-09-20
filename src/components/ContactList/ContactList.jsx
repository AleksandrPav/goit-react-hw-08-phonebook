import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contact/contact-selectors';
import { getContacts, deleteContact } from '../../redux/contact/contact-operations';
import { changeFilter } from '../../redux/contact/contact-actions';
import css from "./ContactsList.module.css";

const ContactsList = () => {
    const contacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);
   
    
    return (
       
        <ul className={css.list}>
            {contacts.map(({ id, name, phone }) => (
            <li className={css.list__items} key={id}>
                <p className={css.list__name}>{name}: {phone}</p>
                <button
                className={css.list__btn}
                type="button"
                onClick={() => dispatch(deleteContact(id), dispatch(changeFilter('')))}
                >
                Delete
                </button>
            </li>
            ))}
        </ul>

    );
   
}






export default ContactsList;


//  const dispatch = useDispatch();
    
//     useEffect(() => {
//         dispatch(getContacts());
//     }, [dispatch]);

//     const filteredContacts = useSelector(getFilteredContacts);

//     const handleDelete = e => {
//     e.preventDefault();
//     dispatch(changeFilter(''));
//     dispatch(deleteContact(id));
//   };
//     return (
//         <ul className={css.list}>
//         {filteredContacts.map(contact => (
//             <li className={css.list__items} key={id}>
//             <p className={css.list__name}>{name}: {phone}</p>
//             <button value={id} className={css.list__btn} onClick={handleDelete}>Delete</button>
//             </li>
//         ))}
//         </ul>
//     );