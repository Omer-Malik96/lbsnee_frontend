import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addProductToCart, deleteProductFromCart} from '../slices/cartSlice';
import {RootState} from '../store';
import {Cart} from '../templates';
import {Product} from '../types';

export const CartScreen: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.products);

  const handleRemoveProduct = useCallback(
    (id: string) => {
      dispatch(deleteProductFromCart(id));
    },
    [dispatch],
  );

  const onAddToCart = useCallback(
    (product: Product) => {
      dispatch(addProductToCart(product));
    },
    [dispatch],
  );

  return (
    <SafeAreaView className="flex flex-1 px-3">
      <Cart
        products={products ?? []}
        onAddToCart={onAddToCart}
        handleRemoveProduct={handleRemoveProduct}
      />
    </SafeAreaView>
  );
};
