import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, InputGroup, Button } from 'react-bootstrap';
import { FiAtSign, FiKey } from 'react-icons/fi';
import { useLoginUserMutation } from 'services/usersApi';
import { changeToken } from 'redux/tokenSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginUser] = useLoginUserMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const { data: loginResult } = await loginUser({ email, password });
    if (loginResult) {
      dispatch(changeToken(loginResult.token));
      localStorage.setItem('token', loginResult.token);
      setEmail('');
      setPassword('');
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') return setEmail(value);
    setPassword(value);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <FiAtSign />
            </InputGroup.Text>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
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
              name="password"
              placeholder="Password"
              value={password}
              required
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
    </Container>
  );
}
