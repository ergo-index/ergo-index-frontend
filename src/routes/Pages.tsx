import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';

import { RootState } from '../state/store';
import { loadProfile } from '../state/UI/UserDuck';
import LoggedOutRoute from './LoggedOutRoute';
import LoggedInRoute from './LoggedInRoute';
import Dashboard from '../components/dashboard/Dashboard';
import Portfolio from '../components/portfolio/Portfolio';
import NotFound from '../components/notFound/NotFound';
import Landing from '../components/landing/LandingMain';

const Pages = () => {
    const dispatch = useDispatch()
    const {
        loginLoading,
        isAuthenticated,
        jwtAxiosId,
        profileLoading
    } = useSelector(
        (state: RootState) => state.userState
    )

    // Load the user's profile every 5 seconds.
    // If the server says the JWT is invalid, then this will automatically sign the user out
    // TODO: Uncomment once the backend accepts loadEmail() without the email param (using the JWT)
    /*useEffect(() => {
        const timer = setInterval(() => {
            if (loginLoading === 'idle' && isAuthenticated && profileLoading === 'idle') {
                dispatch(loadProfile(jwtAxiosId))
            }
        }, 5000);
        return () => clearTimeout(timer);
    })*/

    return (
        <Switch>
            <LoggedOutRoute path='/' exact={true} component={Landing} />
            <LoggedInRoute path='/dashboard' exact={true} component={Dashboard} />
            <LoggedInRoute path='/portfolio' exact={true} component={Portfolio} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Pages;
