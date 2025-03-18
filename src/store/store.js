import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import cartReducer from "./cartSlice";
import recentlyViewedReducer from "./resentlyViewd/ResentlyViewed";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    recentlyViewed: recentlyViewedReducer,
  },
});
export default store;
