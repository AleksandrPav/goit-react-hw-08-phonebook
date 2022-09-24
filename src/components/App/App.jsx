import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useGetUserQuery } from 'services/usersApi';
import { useGetItemsQuery } from 'services/contactsApi';
import { changeToken } from 'redux/tokenSlice';
import { getToken } from 'redux/selectors';
import UserMenu from 'components/UserMenu';
import PrivateRoute from 'routes/PrivateRoute/PrivateRoute';
import PublicRoute from 'routes/PublicRoute/PublicRoute';
import SignupForm from 'components/SignupForm';
import LoginForm from 'components/LoginForm';
import Contacts from 'components/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const getUserResult = useGetUserQuery(token, { skip: !token });
  const getContactsResult = useGetItemsQuery(token, { skip: !token });
  const tokenLS = localStorage.getItem('token');

  useEffect(() => {
    if (tokenLS) dispatch(changeToken(tokenLS));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (getUserResult.isError || getContactsResult.isError)
      dispatch(changeToken(''));
  }, [getUserResult, getContactsResult, dispatch]);

  return (
    <>
      <UserMenu />
      {(getUserResult.isFetching || getContactsResult.isFetching) && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/signup"
          element={
            <PublicRoute redirectTo="/contacts" restricted>
              <SignupForm />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" restricted>
              <LoginForm />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/contacts" />} />
      </Routes>
    </>
  );
}
