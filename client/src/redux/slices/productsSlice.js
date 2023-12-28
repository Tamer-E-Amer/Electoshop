import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "asc",
  filteredProductsByCategories: [],
  filteredProductsByPrice: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setFilteredProductsByCategories: (state, action) => {
      state.filteredProductsByCategories = action.payload;
    },
    setFilteredProductsByPrice: (state, action) => {
      state.filteredProductsByPrice = action.payload;
    },
  },
});

export const {
  setSort,
  setFilteredProductsByCategories,
  setFilteredProductsByPrice,
} = productsSlice.actions;
export default productsSlice.reducer;
