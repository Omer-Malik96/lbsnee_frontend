import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../types';

interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<Product>) {
      const newProducts = state.products.findIndex(
        product => product.id == action.payload.id,
      );
      const products = [...state.products];
      if (newProducts >= 0) {
        products[newProducts].quantity += 1;
        state.products = products;
      } else {
        state.products = [...state.products, {...action.payload, quantity: 1}];
      }
    },
    deleteProductFromCart(state, action: PayloadAction<string>) {
      const productIndex = state.products.findIndex(
        product => product.id == action.payload,
      );
      if (productIndex >= 0 && state.products[productIndex].quantity > 1)
        state.products[productIndex].quantity -= 1;
      if (productIndex >= 0 && state.products[productIndex].quantity == 1)
        state.products = state.products.filter(
          product => product.id !== action.payload,
        );
    },
    isProductInCart(state, action: PayloadAction<string>) {
      const productIndex = state.products.findIndex(
        product => product.id == action.payload,
      );
      if (productIndex >= 0 && state.products[productIndex].quantity > 1)
        state.products[productIndex].quantity -= 1;
      if (productIndex >= 0 && state.products[productIndex].quantity == 1)
        state.products = state.products.filter(
          product => product.id !== action.payload,
        );
    },
  },
});

export const {addProductToCart, deleteProductFromCart} = cartSlice.actions;
export default cartSlice.reducer;
