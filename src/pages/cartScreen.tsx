import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addProductToCart, deleteProductFromCart} from '../slices/cartSlice';
import {RootState} from '../store';
import {Cart} from '../templates';
import {Product} from '../types';

export const CartScreen: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.products);

  const handleRemoveProduct = (id: string) => {
    dispatch(deleteProductFromCart(id));
  };

  const onAddToCart = (product: Product) => {
    dispatch(addProductToCart(product));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Cart
        products={products ?? []}
        onAddToCart={onAddToCart}
        handleRemoveProduct={handleRemoveProduct}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
