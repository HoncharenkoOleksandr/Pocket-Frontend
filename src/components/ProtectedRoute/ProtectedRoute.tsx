import React, { FC } from 'react';
import { Navigate, Route } from 'react-router';

import { ROUTES } from '@utils';

type ProtectedRouteProps = {
  children: React.ReactElement;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  // TODO: Create logic for protected route
  if (localStorage.getItem('token')) {
    return children;
  }

  return <Navigate to={ROUTES.LOGIN} />;
};
