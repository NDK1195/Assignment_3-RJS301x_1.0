import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    isShow: false,
    product: {
      id: "",
      img: "",
      name: "",
      price: "",
      desc: "",
    },
  },
  reducers: {
    SHOW_POPUP: (state, action) => {
      state.isShow = true;
      state.product = action.payload;
    },
    HIDE_POPUP: (state) => {
      state.isShow = false;
    },
  },
});

export const popupActions = popupSlice.actions;

export default popupSlice.reducer;
