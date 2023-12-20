import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: {
      items: [],
      totalPrice: 0,
      fees: 0,
    },
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.items?.find(
        (item) => item.id === action.payload.id
      );
      if (!item) {
        state.cartItems.items.push(action.payload);
      } else {
        item.quantity += action.payload.quantity;
      }
    },
    removeItemFromCart: (state, action) => {
      state.cartItems.items = state.cartItems.items.filter(
        (item) => item.id !== action.payload.id
      );

      // console.log("item removed", action.payload);
    },
    emptyCart: (state) => {
      state.cartItems.items = [];
    },

    // update product quantity when with -/+ button in cart page

    incrementProductQnt: (state, action) => {
      // console.log("Product id: ", action.payload.id);
      const item = state.cartItems.items.find(
        (item) => item.id === action.payload.id
      );
      item.quantity += 1;
    },
    decrementProductQnt: (state, action) => {
      const item = state.cartItems.items.find(
        (item) => item.id === action.payload.id
      );
      item.quantity <= 1 ? 1 : (item.quantity -= 1);
    },
    getTotalPrice: (state) => {
      // let totalPrice = 0;
      // state.cartItems.items.forEach((item) => {
      //   totalPrice += item.quantity * item.price;
      // });
      // state.cartItems.totalPrice = totalPrice;
      const totalPrice = state.cartItems.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.cartItems.totalPrice = totalPrice;
      console.log("total price", totalPrice);
      // return totalPrice;
      // console.log("total", state.products.length);
      // console.log("test totals")
    },

    // Shipping fees
    getFees: (state) => {
      state.cartItems.totalPrice > 1000
        ? (state.cartItems.fees = 0)
        : (state.cartItems.fees = 50);
    },
  },
});

export const {
  addToCart,
  removeItemFromCart,
  emptyCart,
  incrementProductQnt,
  decrementProductQnt,
  getTotalPrice,
  getFees,
} = cartSlice.actions;

export default cartSlice.reducer;
