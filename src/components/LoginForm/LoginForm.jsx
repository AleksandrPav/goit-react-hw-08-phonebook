import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, InputGroup, Button } from 'react-bootstrap';
import { FiAtSign, FiKey } from 'react-icons/fi';
import { useLoginUserMutation } from 'services/usersApi';
import { changeToken } from 'redux/tokenSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './LoginForm.module.css';

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
    <Container className={css.container}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Email address</Form.Label>
          <InputGroup className="mb-2">
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
          <Form.Text className="text-muted">Please enter your email.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Password</Form.Label>
          <InputGroup className="mb-2">
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
          <Form.Text className="text-muted">
            Please enter your password.
          </Form.Text>
        </Form.Group>
        <Button className={css.button} variant="success" type="submit">
          Log in
        </Button>
      </Form>
    </Container>
  );
}
