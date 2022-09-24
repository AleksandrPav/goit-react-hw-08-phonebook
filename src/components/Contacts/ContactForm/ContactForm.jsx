import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Form,
  Row,
  Col,
  InputGroup,
  Button,
  Container,
  Toast,
} from 'react-bootstrap';
import { FiUser, FiPhone, FiUserPlus } from 'react-icons/fi';
import { usePostItemMutation } from 'services/contactsApi';
import { changeFilter } from 'redux/filterSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [postItem, { isError, error }] = usePostItemMutation();

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') return setName(value);
    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    postItem({ name, number });
    dispatch(changeFilter(''));
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Row className="justify-content-md-between">
            <Col md="6">
              <InputGroup>
                <InputGroup.Text id="basic-addon1">
                  <FiUser />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={name}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  onChange={handleChange}
                />
              </InputGroup>
            </Col>
            <Col md="5">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <FiPhone />
                </InputGroup.Text>
                <Form.Control
                  type="tel"
                  name="number"
                  placeholder="Enter number"
                  value={number}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </InputGroup>
            </Col>
            <Col md="auto">
              <Button type="submit">
                <FiUserPlus />
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>

      {isError && (
        <Toast>
          <Toast.Header closeButton={false}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-3"
              alt=""
            />
            <strong className="me-auto">Error!</strong>
          </Toast.Header>
          <Toast.Body>{error.status}</Toast.Body>
        </Toast>
      )}
    </Container>
  );
}
