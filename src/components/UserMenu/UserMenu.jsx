import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { FiPhoneCall } from 'react-icons/fi';
import { getToken } from 'redux/selectors';
import { useLogoutUserMutation, useGetUserQuery } from 'services/usersApi';
import { changeToken } from 'redux/tokenSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './UseMenu.module.css';

export default function App() {
  const dispatch = useDispatch();

  const token = useSelector(getToken);
  const [logoutUser] = useLogoutUserMutation();
  const getUserResult = useGetUserQuery(token, { skip: !token });

  const currentUser = getUserResult.isSuccess ? getUserResult.data.name : '';

  const handleLogout = async () => {
    if (token) {
      await logoutUser();
      localStorage.setItem('token', '');
      dispatch(changeToken(''));
    }
  };

  return (
    <Navbar className="mb-3" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#" className={s.brand}>
          <FiPhoneCall />
          <span>{`   Phonebook hw.8`}</span>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Nav className={s.nav}>
          {!currentUser && (
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? s.active : s.inactive)}
            >
              <Navbar.Text>login</Navbar.Text>
            </NavLink>
          )}
          {!currentUser && (
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? s.active : s.inactive)}
            >
              <Navbar.Text>signup</Navbar.Text>
            </NavLink>
          )}
          <Navbar.Text>
            {currentUser && `Signed in as: ${currentUser}`}
          </Navbar.Text>
        </Nav>

        {currentUser && (
          <Button type="button" variant="light" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Container>
    </Navbar>
  );
}
