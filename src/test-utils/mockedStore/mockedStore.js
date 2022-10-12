import { configureStore, createReducer } from "@reduxjs/toolkit";
import { cellphonesTestList } from "../utils/test-variables";

const initialCellphoneState = cellphonesTestList;
const initialSearch = "";

const mockCellphoneReducer = createReducer(initialCellphoneState, (builder) => {
  builder.addDefaultCase((state) => state);
});

const mockSearchReducer = createReducer(initialSearch, (builder) => {
  builder.addDefaultCase((state) => state);
});

const mockStore = configureStore({
  reducer: {
    cellphones: mockCellphoneReducer,
    search: mockSearchReducer,
  },
});

export default mockStore;
