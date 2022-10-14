import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./feature/cartSlice/cartSlice";
import { cellphoneReducer } from "./feature/cellphoneSlice/cellphoneSlice";
import { loadingReducer } from "./feature/loadingSlice/loadingSlice";
import { searchReducer } from "./feature/searchSlice/searchSlice";

export const store = configureStore({
  reducer: {
    cellphones: cellphoneReducer,
    search: searchReducer,
    cart: cartReducer,
    loading: loadingReducer,
  },
});
