import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem(state, action) {
      // Ensure the full item data (including imageUrl) is added to the cart
      const item = action.payload;
      console.log(item)
      const itemExists = state.cart.find((cartItem) => cartItem.itemId === item.itemId);
      
      if (itemExists) {
        // If the item already exists in the cart, just update the quantity and totalPrice
        itemExists.quantity++;
        itemExists.totalPrice = itemExists.quantity * itemExists.unitPrice;
      } else {
        // Otherwise, add the new item with all its details
        state.cart.push({ ...item, imageUrl: item.imageUrl, totalPrice: item.unitPrice, quantity: 1 });
      }
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.itemId !== action.payload);
    },

    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.itemId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },

    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.itemId === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) => state.cart.cart.find((item) => item.itemId === id)?. quantity ?? 0;
