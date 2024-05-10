import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initState";

const cartSlice = createSlice({
  name: "cart",
  initialState: initState.cart,
  reducers: {
    addProductToCart(state, action) {
      state.push({
        id: action.payload,
        quantity: 1,
        //   isChecked: false,
      });
    },

    removeProductFromCart(state, action) {
      return state.filter((product) => product.id !== action.payload);
    },

    counterIncrementProduct(state, action) {
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
    },

    counterDecrementProduct(state, action) {
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
    },

    clearCart() {
      return [];
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  counterIncrementProduct,
  counterDecrementProduct,
  clearCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export const getShoppingCartSelector = (state) => state.cart;
