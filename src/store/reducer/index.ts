// import { combineReducers } from 'redux';
// import { productReducer } from './productReducer';
// // import { cartReducer } from "./cartReducer"; // if you add cart later
//
// const rootReducer = combineReducers({
//   product: productReducer,
//   // cart: cartReducer,
// });
//
// export default rootReducer;
//
// export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { ProductActionTypes } from '../type/productType';

const rootReducer = combineReducers({
  product: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// If later you add more reducers/actions, union them here
export type AppActions = ProductActionTypes;
