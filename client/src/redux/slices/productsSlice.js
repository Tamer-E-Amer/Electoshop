import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  error: null,
  status: "loading", // loading, succeeded or failed
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductDataStart: (state) => {
      state.status = "loading";
    },
    fetchProductsDataSccess: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
      state.error = null;
    },
    fetchProductsDataFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

const {
  fetchProductDataStart,
  fetchProductsDataSccess,
  fetchProductsDataFailure,
} = productSlice.actions;
export default productSlice.reducer;
