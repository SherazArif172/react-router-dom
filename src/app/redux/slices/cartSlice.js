import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    Items: [],
  },
  reducer: {
    addItem: (state, action) => {
      state.Items.push(action.payload);
    },
    clearCart: (state) => {
      state.Items = [];
    },
    removeItem: (state, action) => {
      const index = state.Items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.Items.splice(index, 1);
      }
    },
  },
});

export default cartSlice.reducer;
