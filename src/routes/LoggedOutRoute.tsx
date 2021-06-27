import React  from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../state/store';

interface Props {
    exact?: boolean
    path: string
    component: React.ComponentType<any>
}
const LoggedOutRoute = ({ component: Component, ...otherProps }: Props) => {
    const { isAuthenticated } = useSelector(
        (state: RootState) => state.userState
    );

    // Redirect to the dashboard if the user logs in
    if (isAuthenticated === true) {
        return (
            <>
                <Redirect to="/dashboard" />
            </>
        );
    }

    return (
        <>
            <Route
                render={otherProps => (
                    <>
                        <Component {...otherProps} />
                    </>
                )}
            />
        </>
    );
};

export default LoggedOutRoute;
