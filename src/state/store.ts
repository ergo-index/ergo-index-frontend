import {
    configureStore,
    ThunkAction,
    Action,
    combineReducers
} from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';

import userState from './UI/UserDuck';
import { fundsApi } from './server/FundsDuck';

const rootReducer = combineReducers({
    [fundsApi.reducerPath]: fundsApi.reducer,
    userState
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fundsApi.middleware),
});

setupListeners(store.dispatch);

// Export types to use elsewhere
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
