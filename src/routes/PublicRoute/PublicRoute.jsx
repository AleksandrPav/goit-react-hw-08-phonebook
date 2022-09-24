import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/selectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/contacts',
}) {
  const token = useSelector(getToken);
  const shouldRedirect = token && restricted;
  return !shouldRedirect ? children : <Navigate to={redirectTo} />;
}
