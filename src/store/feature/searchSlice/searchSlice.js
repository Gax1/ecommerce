import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    changeSearch: (previusState, action) => action.payload,
  },
});

export const searchReducer = searchSlice.reducer;

export const { changeSearch: changeSearchActionCreator } = searchSlice.actions;
