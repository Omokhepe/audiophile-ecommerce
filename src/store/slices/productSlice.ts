import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Root } from '../type/productType';
import productData from '@public/data.json';

interface ProductState {
  products: Root[];
  selectedProduct: Root | null;
}

const initialState: ProductState = {
  products: productData,
  selectedProduct: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Root[]>) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action: PayloadAction<Root | null>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProducts, setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
