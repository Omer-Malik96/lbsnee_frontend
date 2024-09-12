import {configureStore} from '@reduxjs/toolkit';
import {productsApi} from '../services/productServices';
import cartReducer from '../slices/cartSlice'; // Define this slice below

// Configure the store
export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer, // Local reducer for managing product actions
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
