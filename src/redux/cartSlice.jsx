import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (cartItemIndex !== -1) {
        state.cartItems[cartItemIndex].value += 1;
      } else {
        state.cartItems.push({
          id: action.payload.id,
          title: action.payload.title,
          img: action.payload.img,
          price: action.payload.price,
          value: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      const cartItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (cartItemIndex !== -1) {
        if (state.cartItems[cartItemIndex].value === 1) {
          state.cartItems.splice(cartItemIndex, 1);
        } else {
          state.cartItems[cartItemIndex].value -= 1;
        }
      }
    },
    emptyCart: (state) => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
