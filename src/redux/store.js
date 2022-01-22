import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reduxslices/cartSlice';

export const store = configureStore({
  reducer: {
      cart: cartReducer
  },
})