import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  const savedState = localStorage.getItem("counter");
  return savedState ? JSON.parse(savedState) : { count: 0 };
};
const initialState = loadState;
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      localStorage.setItem('counter',JSON.stringify(state));
    },
    decrement: (state) => {
      if (state.count > 0) state.count -= 1;
      localStorage.setItem('counter',JSON.stringify(state));
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
