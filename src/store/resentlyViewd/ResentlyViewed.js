import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const data = localStorage.getItem("recentlyViewed");
  return data ? JSON.parse(data) : [];
};
const SaveInLocalStorage = (data) => {
  localStorage.setItem("recentlyViewed", JSON.stringify(data));
};
const recentlyViewSlice = createSlice({
  name: "recentlyViewed",
  initialState: loadFromLocalStorage,
  reducers: {
    addRecentlyViewedProduct: (state, action) => {
      const existProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (!existProduct) {
        state.push(action.payload);
        SaveInLocalStorage(state);
      }
    },
    clearRecentlyViewed: (state, action) => {
      state.splice(0, state.length);
      localStorage.removeItem("recentlyViewed");
    },
  },
});
export const { addRecentlyViewedProduct, clearRecentlyViewed } =
  recentlyViewSlice.actions;
export default recentlyViewSlice.reducer;
