import { createSlice } from "@reduxjs/toolkit";

const initialCellphonesState = [{}];

const cellphoneSlice = createSlice({
  name: "cellphone",
  initialState: initialCellphonesState,
  reducers: {
    uploadCellPhones: (previusState, action) => action.payload,
  },
});

export const cellphoneReducer = cellphoneSlice.reducer;

export const { uploadCellPhones: uploadCellPhonesActionCreator } =
  cellphoneSlice.actions;
