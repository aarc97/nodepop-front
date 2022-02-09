import React, { useContext } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/SessionContext';

const ProtectedRoute = () => {
  const userContext = useContext(UserContext);
  const location = useLocation();

  const { currentUser } = userContext.state;

  return Object.keys(currentUser).length > 0 ? (
    <Outlet from={location} />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
