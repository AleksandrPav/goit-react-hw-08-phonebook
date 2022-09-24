import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, InputGroup, Button } from 'react-bootstrap';
import { FiUser, FiAtSign, FiKey } from 'react-icons/fi';
import { useSignupUserMutation } from 'services/usersApi';
import { changeToken } from 'redux/tokenSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignupForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signupUser] = useSignupUserMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await signupUser({ name, email, password });
    if (data) {
      dispatch(changeToken(data.token));
      localStorage.setItem('token', data.token);
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') return setName(value);
    if (name === 'email') return setEmail(value);
    setPassword(value);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <FiUser />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              required
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <FiAtSign />
            </InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              required
              onChange={handleChange}
            />
          </InputGroup>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <FiKey />
            </InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              required
              autoComplete="current-password"
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
    </Container>
  );
}
