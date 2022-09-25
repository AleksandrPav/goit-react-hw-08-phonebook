import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useDeleteItemMutation, useGetItemsQuery } from 'services/contactsApi';
import { changeFilter } from 'redux/filterSlice';
import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const [deleteContact, { isError, error }] = useDeleteItemMutation();
  useGetItemsQuery();

  const handleDelete = e => {
    e.preventDefault();
    dispatch(changeFilter(''));
    deleteContact(id);
  };

  return (
    <li>
      {!isError && (
        <Card>
          <Card.Body className={`d-flex ${css.contact}`}>
            <div className={css.info}>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{number}</Card.Text>
            </div>
            <Button
              variant="danger"
              type="button"
              value={id}
              onClick={handleDelete}
            >
              delete
            </Button>
          </Card.Body>
        </Card>
      )}
      {isError && <p>{error.status}</p>}
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
