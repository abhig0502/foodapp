import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer1 from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer1,

  },
});

export default appStore;
