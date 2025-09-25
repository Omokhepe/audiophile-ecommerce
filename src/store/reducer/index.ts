import { combineReducers } from '@reduxjs/toolkit';
import productReducer from '../slices/productSlice';
import cartSlice from '@/store/slices/cartSlice';

const appReducer = combineReducers({
  product: productReducer,
  cart: cartSlice,
});

export type AppState = ReturnType<typeof appReducer>;
export default appReducer;
