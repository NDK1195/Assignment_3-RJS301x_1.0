import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    products: [],
    category: "",
    sortValue: "default",
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSortValue(state, action) {
      state.sortValue = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSortedProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice.reducer;
