import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    openLoading: (previusState) => true,
    closeLoading: (previusState) => false,
  },
});

export const loadingReducer = loadingSlice.reducer;

export const {
  openLoading: openLoadingActionCreator,
  closeLoading: closeLoadingActionCreator,
} = loadingSlice.actions;
