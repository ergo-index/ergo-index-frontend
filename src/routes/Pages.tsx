import React, { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { auth, useAuthState } from '../firebase';
import LoggedOutRoute from './LoggedOutRoute';
import LoggedInRoute from './LoggedInRoute';
import Dashboard from '../components/dashboard/Dashboard';
import Portfolio from '../components/portfolio/Portfolio';
import NotFound from '../components/notFound/NotFound';
import Landing from '../components/landing/LandingMain';
import { loadProfile } from '../state/UI/UserDuck';

const Pages = () => {
  const [authUser, authUserLoading] = useAuthState(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authUser && !authUserLoading) {
      dispatch(loadProfile(authUser));
    }
  }, [authUser, authUserLoading, dispatch]);

  // TODO: Don't display anything until authentication is checked

  return (
    <Switch>
      <LoggedOutRoute path="/" exact component={Landing} />
      <LoggedInRoute path="/dashboard" exact component={Dashboard} />
      <LoggedInRoute path="/portfolio" exact component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Pages;
