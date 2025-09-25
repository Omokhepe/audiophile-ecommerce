// import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';
// import { loadState, saveState } from './sessionStorage';
//
// const persistedState = loadState();
//
// export const store = configureStore({
//   reducer: rootReducer,
//   preloadedState: persistedState,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false, // optional: disables warnings for non-serializable data
//     }),
// });
//
// // Subscribe to store changes and save in sessionStorage
// store.subscribe(() => {
//   saveState(store.getState());
// });
//
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'; // sessionStorage
import { createNoopStorage } from '@/store/sessionStorage';
import appReducer from './reducer';

const isServer = typeof window === 'undefined';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: isServer ? createNoopStorage() : storageSession,
  whitelist: ['cart'], // only persist product slice
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/REGISTER',
        ],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
