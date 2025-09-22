import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
// Use sessionStorage instead of localStorage
import storageSession from 'redux-persist/lib/storage/session';

import { productReducer } from './reducer/productReducer';
import { ProductActionTypes } from './type/productType';

// 1️⃣ Combine reducers
const rootReducer = combineReducers({
  product: productReducer,
});

// 2️⃣ RootState type
export type RootState = ReturnType<typeof rootReducer>;

// 3️⃣ Union all actions here (expand later if you add cart, auth, etc.)
export type AppActions = ProductActionTypes;

// 4️⃣ Persist config
const persistConfig = {
  key: 'root',
  storage: storageSession,
};

// 5️⃣ Persisted reducer
const persistedReducer = persistReducer<RootState, ProductActionTypes>(
  persistConfig,
  rootReducer
);

// 6️⃣ Create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist needs this off
    }),
});

// 7️⃣ Persistor
export const persistor = persistStore(store);

// 8️⃣ Typed hooks (if you use react-redux hooks)
export type AppDispatch = typeof store.dispatch;
