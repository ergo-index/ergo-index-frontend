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
    // TODO: Change back to /portfolio once the dashboard is complete
    /*if (isAuthenticated === true) {
        return (
            <>
                <Redirect to="/portfolio" />
            </>
        );
    }*/

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
