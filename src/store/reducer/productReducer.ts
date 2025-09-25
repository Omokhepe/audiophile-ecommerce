import { Root } from '../type/productType';
import {
  SET_PRODUCTS,
  SET_SELECTED_PRODUCT,
  ProductActionTypes,
} from '../type/productType';

import productData from '@public/data.json';

// Initial state
export interface ProductState {
  products: Root[];
  selectedProduct: Root | null;
}

const initialState: ProductState = {
  products: productData,
  selectedProduct: null,
};

export const productReducer = (
  state = initialState,
  action: ProductActionTypes
): ProductState => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    default:
      return state;
  }
};
