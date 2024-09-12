import React from 'react';
import {View} from 'react-native';
import {ProductActions, ProductInfo} from '.';
import {Image} from '../atoms';
import {Product} from '../types';

// Define the type for ProductCard props
export type ProductCardProps = {
  onAddToCart: () => void;
  onDeleteProduct: () => void;
  isInCart: () => Product | undefined;
} & Product;

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  details,
  price,
  onAddToCart,
  onDeleteProduct,
  isInCart,
}) => {
  const inCartProduct = isInCart();
  return (
    <View className="border border-[#ddd] rounded-lg p-4 mb-4 bg-white shadow-md">
      <Image source={{uri: image}} height={200} className="rounded-lg w-full" />
      <ProductInfo title={name} description={details} price={price} />
      <ProductActions
        productInCart={inCartProduct}
        onAddToCart={onAddToCart}
        onDeleteProduct={onDeleteProduct}
      />
    </View>
  );
};

export default ProductCard;
