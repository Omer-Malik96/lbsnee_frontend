// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Product} from '../types';

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shopping-app-670b3-default-rtdb.firebaseio.com',
  }),
  tagTypes: ['Get'],
  endpoints: builder => ({
    getProductsList: builder.query<Product[], void>({
      query: () => {
        return {
          url: `/products.json`,
          method: 'GET',
        };
      }, // Endpoint for fetching the list of Pokémon
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetProductsListQuery} = productsApi;
