import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    toggleLoading: (previusState, action) => !previusState,
  },
});

export const loadingReducer = loadingSlice.reducer;

export const { toggleLoading: toggleLoadingActionCreator } =
  loadingSlice.actions;
