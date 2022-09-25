import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { FcTwoSmartphones } from 'react-icons/fc';
import { getToken } from 'redux/selectors';
import { useLogoutUserMutation, useGetUserQuery } from 'services/usersApi';
import { changeToken } from 'redux/tokenSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './UseMenu.module.css';

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
    <Navbar className={'mb-5'} bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#" className={css.brand}>
          <FcTwoSmartphones className={css.icon} />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Nav className={css.nav}>
          {!currentUser && (
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? css.active : css.inactive
              }
            >
              <Navbar.Text>Signup</Navbar.Text>
            </NavLink>
          )}
          {!currentUser && (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? css.active : css.inactive
              }
            >
              <Navbar.Text>Login</Navbar.Text>
            </NavLink>
          )}

          <Navbar.Text>
            {currentUser && `Signed in as: ${currentUser}`}
          </Navbar.Text>
        </Nav>

        {currentUser && (
          <Button type="button" variant="warning" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Container>
    </Navbar>
  );
}
