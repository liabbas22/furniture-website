import { createSlice } from "@reduxjs/toolkit";
const FREE_SHIPPING_THRESHOLD = 1000;
const loadCartState = () => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    const parsedCart = JSON.parse(savedCart);
    return {
      cartItems: parsedCart.cartItems || [],
      totalPrice: Number(parsedCart.totalPrice) || 0,
      freeShipping: Number(parsedCart.totalPrice) >= FREE_SHIPPING_THRESHOLD,
    };
  }
  return { cartItems: [], totalPrice: 0, freeShipping: false };
};

const saveCartState = (state) => {
  localStorage.setItem(
    "cart",
    JSON.stringify({
      cartItems: state.cartItems,
      totalPrice: state.totalPrice.toFixed(2),
    })
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartState(),
  reducers: {
    addtocart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.totalPrice =
        Number(state.totalPrice) + Number(action.payload.price);
      state.freeShipping = state.totalPrice >= FREE_SHIPPING_THRESHOLD;
      saveCartState(state);
    },

    removefromcart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex >= 0) {
        state.totalPrice = Math.max(
          0,
          Number(state.totalPrice) -
            Number(state.cartItems[itemIndex].price) *
              Number(state.cartItems[itemIndex].quantity)
        );
        state.cartItems.splice(itemIndex, 1);
        state.freeShipping = state.totalPrice >= FREE_SHIPPING_THRESHOLD;
      }

      saveCartState(state);
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalPrice += Number(item.price);
        state.freeShipping = state.totalPrice >= FREE_SHIPPING_THRESHOLD;
      }

      saveCartState(state);
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalPrice = Math.max(0, state.totalPrice - Number(item.price));
        state.freeShipping = state.totalPrice >= FREE_SHIPPING_THRESHOLD;
      }

      saveCartState(state);
    },

    clearChat: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.freeShipping = false;
      saveCartState(state);
    },
  },
});

export const {
  addtocart,
  removefromcart,
  increaseQuantity,
  decreaseQuantity,
  clearChat,
} = cartSlice.actions;

export default cartSlice.reducer;
