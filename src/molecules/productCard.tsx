import React from 'react';
import {View} from 'react-native';
import {ProductActions, ProductInfo} from '.';
import {Image} from '../atoms';

// Define the type for ProductCard props
export interface ProductCardProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  onAddToCart: () => void;
  onViewDetails: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  description,
  price,
  onAddToCart,
  onViewDetails,
}) => {
  return (
    <View className="border border-[#ddd] rounded-lg p-4 mb-4 bg-white shadow-md">
      <Image
        source={{uri: imageUrl}}
        height={200}
        className="rounded-lg w-full"
      />
      <ProductInfo title={title} description={description} price={price} />
      <ProductActions onAddToCart={onAddToCart} onViewDetails={onViewDetails} />
    </View>
  );
};

export default ProductCard;
