// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import {Product} from '../types';

const apiUrl = Config.API_URL;
// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({baseUrl: apiUrl}),
  endpoints: builder => ({
    getProductsList: builder.query<Product[], void>({
      query: () => `/products`, // Endpoint for fetching the list of Pokémon
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetProductsListQuery} = productsApi;
