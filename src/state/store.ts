import {
    configureStore,
    ThunkAction,
    Action,
    combineReducers
} from '@reduxjs/toolkit';

import * as reducers from './ducks';

// Create a store with all of our reducers
const rootReducer = combineReducers(reducers);
const store = configureStore({
    reducer: rootReducer
});

// Export types to use elsewhere
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
