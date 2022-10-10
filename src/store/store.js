import { configureStore } from "@reduxjs/toolkit";
import { cellphoneReducer } from "./feature/cellphoneSlice/cellphoneSlice";

export const store = configureStore({
  reducer: {
    cellphone: cellphoneReducer,
  },
});
