import React from 'react';
import {View} from 'react-native';
import {Text} from '../atoms';

// Define the type for ProductInfo props
interface ProductInfoProps {
  title: string;
  description: string;
  price: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  description,
  price,
}) => {
  return (
    <View className="my-2">
      <Text variant="heading">{title}</Text>
      <Text className="text-ellipsis" numberOfLines={3}>
        {description}
      </Text>
      <Text variant="heading">{price}</Text>
    </View>
  );
};

export default ProductInfo;
