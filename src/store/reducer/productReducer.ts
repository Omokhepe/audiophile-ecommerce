// redux/reducer.ts
import {
  ProductState,
  ProductActionTypes,
  SET_PRODUCT,
} from '../type/productType';

const initialState: ProductState = {
  selectedProduct: null,
};

export const productReducer = (
  state: ProductState = initialState,
  action: ProductActionTypes
): ProductState => {
  switch (action.type) {
    case SET_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    default:
      return state;
  }
};
