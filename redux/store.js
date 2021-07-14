import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

const reducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer,
});

export default store;
