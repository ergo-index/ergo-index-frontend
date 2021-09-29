import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { auth, useAuthState } from '../firebase';

interface Props {
  exact?: boolean
  path: string
  component: React.ComponentType<any>
}
const LoggedOutRoute = ({ component: Component, ...otherProps }: Props) => {
  const [authUser, authUserLoading] = useAuthState(auth);

  // Redirect to the dashboard if the user logs in
  if (authUser && !authUserLoading) {
    return (
      <>
        <Redirect to="/dashboard" />
      </>
    );
  }

  return (
    <>
      <Route
        render={(otherProps) => (
          <>
            <Component {...otherProps} />
          </>
        )}
      />
    </>
  );
};

export default LoggedOutRoute;
