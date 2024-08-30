import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const CartSlice = createSlice({
  name: 'cart', // Use camelCase for slice name
  initialState,
  reducers: {
    add: (state, action) => {
      const item = state.products.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload); // Corrected push method
      }
    },
    remove: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload.id); // Corrected filter method
    },
    reset: (state) => {
      state.products = [];
    },
  },
});

export const { add, remove, reset } = CartSlice.actions;
export default CartSlice.reducer;






