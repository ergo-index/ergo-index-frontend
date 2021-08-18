
import {
    configureStore,
    ThunkAction,
    Action,
    combineReducers
} from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query'

import userState from './UI/UserDuck'

const rootReducer = combineReducers({
    userState
})

const store = configureStore({
    reducer: rootReducer
});


// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)


// Export types to use elsewhere
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
