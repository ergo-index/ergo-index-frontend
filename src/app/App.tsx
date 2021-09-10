import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../state/store';
import { checkAuthentication } from '../state/UI/UserDuck';
import Pages from '../routes/Pages';
import './App.scss';

const App = () => {
    const dispatch = useDispatch();

    const { isAuthenticated, jwtAxiosId } = useSelector(
        (state: RootState) => state.userState
    );

    // Asynchronously check if the user is already logged in so that they can be routed accordingly
    if (!isAuthenticated) {
        dispatch(checkAuthentication(jwtAxiosId));
    }

    const app = (isAuthenticated === null ? null :
            (
                <BrowserRouter>
                    <Route component={Pages} />
                </BrowserRouter>
            )
    );

    return (
        <>
            <div className='App'>
                {app}
            </div>
        </>
    );
};

export default App;
