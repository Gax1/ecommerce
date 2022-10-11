import { createSlice } from "@reduxjs/toolkit";

const initialCellphonesState = [
  {
    id: "ZmGrkLRPXOTpxsU4jjAcv",
    brand: "Acer",
    model: "Iconia Talk S",
    price: "170",
    imgUrl:
      "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
  },
];

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
