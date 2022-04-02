import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productsInCart: [],
    counter: 0,
    cartTotal: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      var isExist = false;
      state.productsInCart.map((product) => {
        if (product.id === action.payload.id) {
          product.amount++;
          product.totalPrice += product.price;
          state.counter++;
          state.cartTotal += product.price;
          isExist = true;
        }
      });
      if (!isExist) {
        action.payload.amount = 1;
        action.payload.totalPrice = action.payload.price;
        state.counter++;
        state.cartTotal += action.payload.price;
        state.productsInCart.push(action.payload);
      }
    },
  },
});

export const { addProduct } = cartSlice.actions;

export const selectCartTotal = (state) => state.cart.cartTotal;
export const selectCounter = (state) => state.cart.counter;
export const selectProductsInCart = (state) => state.cart.productsInCart;

export default cartSlice.reducer;
