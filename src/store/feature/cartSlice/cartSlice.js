import { createSlice } from "@reduxjs/toolkit";

const initialCount = 0;

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCount,
  reducers: {
    uploadCart: (previusState, action) => action.payload,
  },
});

export const cartReducer = cartSlice.reducer;

export const { uploadCart: uploadCartActionCreator } = cartSlice.actions;
