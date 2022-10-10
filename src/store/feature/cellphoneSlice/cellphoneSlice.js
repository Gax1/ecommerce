import { createSlice } from "@reduxjs/toolkit";

const initialCellphonesState = [{}];

const cellphonesSlice = createSlice({
  name: "cellphone",
  initialState: initialCellphonesState,
  reducers: {
    uploadCellPhones: (previusState, action) => action.payload,
  },
});

export const cellphoneReducer = cellphonesSlice.reducer;

export const { uploadCellPhones: uploadCellPhonesActionCreator } =
  cellphonesSlice.actions;
