import React from 'react';
import {View} from 'react-native';
import {Button} from '../atoms';

// Define the type for ProductActions props
interface ProductActionsProps {
  onAddToCart: () => void;
  onViewDetails: () => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({
  onAddToCart,
  onViewDetails,
}) => {
  return (
    <View className="my-2 flex flex-row justify-between">
      <Button title="Add to Cart" onPress={onAddToCart} variant="primary" />
      <Button title="View Details" onPress={onViewDetails} />
    </View>
  );
};

export default ProductActions;
