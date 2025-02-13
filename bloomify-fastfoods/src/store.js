import { configureStore } from '@reduxjs/toolkit';
import userReducer from './feature/user/userSlice';
import cartReducer from './feature/cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
   // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
