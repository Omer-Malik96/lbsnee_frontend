import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useGetProductsListQuery} from '../services/productServices';
import {addProductToCart, deleteProductFromCart} from '../slices/cartSlice';
import {AppDispatch, RootState} from '../store';
import {Products} from '../templates';
import {Product} from '../types';

export const ProductsScreen: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const {data: products, error, isLoading} = useGetProductsListQuery();
  const localProducts = useSelector((state: RootState) => state.cart.products);

  // Memoized function to handle deleting a product
  const handleDeleteProduct = useCallback(
    (id: string) => {
      dispatch(deleteProductFromCart(id));
    },
    [dispatch],
  );

  // Memoized function to handle adding a product
  const handleAddProduct = useCallback(
    (product: Product) => {
      dispatch(addProductToCart(product));
    },
    [dispatch],
  );

  const isInCart = (id: string) =>
    localProducts?.find(product => product.id === id);

  return (
    <SafeAreaView className="flex flex-1 px-3">
      <Products
        products={products ?? []}
        localProducts={localProducts}
        handleAddProduct={handleAddProduct}
        isInCart={isInCart}
        handleDeleteProduct={handleDeleteProduct}
      />
    </SafeAreaView>
  );
};
