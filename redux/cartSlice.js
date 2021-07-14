import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const isItem = state.find((item) => item.id === action.payload.id);
      if (isItem) {
        isItem.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQty: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decreaseQty: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item === 1) {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    deleteFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, increaseQty, decreaseQty, deleteFromCart } =
  cartSlice.actions;
