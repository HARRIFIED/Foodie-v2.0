import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reduxslices/cartSlice';
import productsReducer from './reduxslices/productsSlice';
import storiesProductsReducer from './reduxslices/storiesProductsSlice';

export const store = configureStore({
  reducer: {
      cart: cartReducer,
      products: productsReducer,
      storiesProducts: storiesProductsReducer
  },
})