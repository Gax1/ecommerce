import { configureStore, createReducer } from "@reduxjs/toolkit";
import { cellphonesTestList } from "../utils/test-variables";

const initialCellphoneState = cellphonesTestList;
const initialSearch = "";
const initialCart = 1;

const mockCellphoneReducer = createReducer(initialCellphoneState, (builder) => {
  builder.addDefaultCase((state) => state);
});

const mockSearchReducer = createReducer(initialSearch, (builder) => {
  builder.addDefaultCase((state) => state);
});

const mockCartReducer = createReducer(initialCart, (builder) => {
  builder.addDefaultCase((state) => state);
});

const mockStore = configureStore({
  reducer: {
    cellphones: mockCellphoneReducer,
    search: mockSearchReducer,
    cart: mockCartReducer,
  },
});

export default mockStore;
