import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICartItem {
  _id: string;
  size?: string;
  count: number;
}

const initialState: { cart: ICartItem[] } = {
  cart: [],
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = [];
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    setCart: (state, action: PayloadAction<ICartItem[]>) => {
      state.cart = action.payload;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    increase: (
      state,
      action: PayloadAction<{ _id: string; size?: string }>
    ) => {
      const item = state.cart.find(
        (v) => v._id === action.payload._id && v.size === action.payload.size
      );
      if (item) {
        item.count++;
      } else {
        state.cart.push({
          _id: action.payload._id,
          size: action.payload.size,
          count: 1,
        });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    decrease: (
      state,
      action: PayloadAction<{ _id: string; size?: string }>
    ) => {
      const item = state.cart.find(
        (v) => v._id === action.payload._id && v.size === action.payload.size
      );
      if (!item) {
        throw 'Decrease error!';
      }
      item.count--;
      if (item.count < 1)
        state.cart = state.cart.filter(
          (v) =>
            !(v._id === action.payload._id && v.size === action.payload.size)
        );
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    remove: (state, action: PayloadAction<{ _id: string; size?: string }>) => {
      const item = state.cart.find(
        (v) => v._id === action.payload._id && v.size === action.payload.size
      );
      if (!item) {
        throw 'Remove error!';
      }
      state.cart = state.cart.filter(
        (v) => !(v._id === action.payload._id && v.size === action.payload.size)
      );
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const { clearCart, setCart, decrease, increase, remove } = cart.actions;

export default cart.reducer;
