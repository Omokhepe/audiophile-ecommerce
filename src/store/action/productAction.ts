// redux/actions.ts
import { Root, SET_PRODUCT, ProductActionTypes } from '../type/productType';

export const setProduct = (product: Root): ProductActionTypes => ({
  type: SET_PRODUCT,
  payload: product,
});
