import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, price } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.total += price;
    },

    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const itemToRemove = state.cart.find((item) => item.id === id);

      if (itemToRemove) {
        const { price, quantity } = itemToRemove;
        state.cart = state.cart.filter((item) => item.id !== id);
        state.total -= price * quantity;
      }
    },

    increaseQuantity: (state, action) => {
      const { id, price } = action.payload;
      const updatedCart = state.cart.map((item) => {
        if (item.id === id) {
          item.quantity += 1;
        }
        return item;
      });

      state.cart = updatedCart;
      state.total += price;
    },

    decreaseQuantity: (state, action) => {
      const { id, price } = action.payload;
      const updatedCart = state.cart.map((item) => {
        if (item.id === id && item.quantity > 0) {
          item.quantity -= 1;
          state.total -= price;
        }
        return item;
      });

      state.cart = updatedCart.filter((item) => item.quantity > 0);
    },

    clear(state) {
      state.cart = [];
      state.total = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clear,
} = cartSlice.actions;

export default cartSlice.reducer;
