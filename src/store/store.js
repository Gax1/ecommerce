import { configureStore } from "@reduxjs/toolkit";
import { cellphoneReducer } from "./feature/cellphoneSlice/cellphoneSlice";
import { searchReducer } from "./feature/searchSlice/searchSlice";

export const store = configureStore({
  reducer: {
    cellphone: cellphoneReducer,
    search: searchReducer,
  },
});
