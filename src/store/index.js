import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popupSlice";
import categoryReducer from "./categorySlice";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    category: categoryReducer,
  },
});
