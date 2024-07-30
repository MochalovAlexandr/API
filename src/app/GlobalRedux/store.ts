'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from './Data/dataSlice';
import { dataApi } from '../getDataWithRtkq';
import { setupListeners } from '@reduxjs/toolkit/query';

const rootReduser = combineReducers({
  data: dataReducer,
  [dataApi.reducerPath]: dataApi.reducer
})


export const store = configureStore({
    // reducer: {
    //   data: dataReducer,
    //   [dataApi.reducerPath]: dataApi.reducer
    // },
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(dataApi.middleware)
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch