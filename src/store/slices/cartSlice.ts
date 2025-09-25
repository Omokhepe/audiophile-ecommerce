import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Root } from '../type/productType'; // your product interface
import { RootState } from '@/store';

export interface CartItem extends Root {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

const calculateTotal = (items: CartItem[]) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Root>) {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        existing.quantity += 1;
        // return {
        //   ...state,
        //   items: state.items.map((item) =>
        //     item.id === action.payload.id
        //       ? { ...item, quantity: (item.quantity ?? 0) + 1 }
        //       : item
        //   ),
        // };
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total = calculateTotal(state.items);
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.total = calculateTotal(state.items);
      }
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
        state.total = calculateTotal(state.items);
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
      state.total = calculateTotal(state.items);
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

// // ✅ Selectors
// export const selectCartItems = (state: RootState) => state.cart.items;
//
// export const selectCartTotal = (state: RootState) =>
//   state.cart.items.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
