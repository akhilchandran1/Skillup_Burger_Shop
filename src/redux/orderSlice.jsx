import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  currentOrder: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      state.currentOrder = action.payload;
    },
    removeCurrentOrder: (state, action) => {
      state.currentOrder = null;
    },
  },
});

export const { addOrder, removeCurrentOrder } = orderSlice.actions;
export default orderSlice.reducer;
