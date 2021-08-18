
import {
    configureStore,
    ThunkAction,
    Action,
    combineReducers
} from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query'

import userState from './UI/UserDuck'
import {fundsApi} from './server/FundsDuck'

const rootReducer = combineReducers({
    [fundsApi.reducerPath]: fundsApi.reducer,
    userState
})

const store = configureStore({
    reducer: rootReducer,

    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fundsApi.middleware),
});


// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)


// Export types to use elsewhere
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
