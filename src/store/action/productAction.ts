import { Root } from '../type/productType';
import {
  SET_PRODUCTS,
  SET_SELECTED_PRODUCT,
  ProductActionTypes,
} from '../type/productType';

export const setProducts = (products: Root[]): ProductActionTypes => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setSelectedProduct = (
  product: Root | null
): ProductActionTypes => ({
  type: SET_SELECTED_PRODUCT,
  payload: product,
});
