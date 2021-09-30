import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthenticatedNav from '../components/nav/AuthenticatedNav';
import { auth, useAuthState } from '../firebase';

interface Props {
  exact?: boolean
  path: string
  component: React.ComponentType<any>
}
const LoggedInRoute = ({ component: Component, ...otherProps }: Props) => {
  const [authUser, authUserLoading] = useAuthState(auth);

  // Redirect to the landing page if the user isn't logged in
  if (!authUser && !authUserLoading) {
    return (
      <>
        <Redirect to="/" />
      </>
    );
  }

  return (
    <>
      <Route
        render={(otherProps) => (
          <>
            <AuthenticatedNav />
            <Component {...otherProps} />
          </>
        )}
      />
    </>
  );
};

export default LoggedInRoute;
