import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../state/store';

interface Props {
    exact?: boolean
    path: string
    component: React.ComponentType<any>
}
const LoggedInRoute = ({ component: Component, ...otherProps }: Props) => {
    const { isAuthenticated } = useSelector(
        (state: RootState) => state.userState
    );

    // Redirect to the landing page if the user isn't logged in
    if (isAuthenticated === false) {
        return (
            <>
                <Redirect to="/" />
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

export default LoggedInRoute;
