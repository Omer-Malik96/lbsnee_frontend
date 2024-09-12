import React from 'react';
import {CartList} from '../organisms';
import {Product} from '../types';

interface CartProps {
  products: Product[];
  handleRemoveProduct: (id: string) => void;
  onAddToCart: (product: Product) => void;
}
export const Cart: React.FC<CartProps> = ({
  products,
  onAddToCart,
  handleRemoveProduct,
}) => {
  return (
    <CartList
      onAddToCart={onAddToCart}
      products={products}
      handleRemoveProduct={handleRemoveProduct}
    />
  );
};
