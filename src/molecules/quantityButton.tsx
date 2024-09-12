import React from 'react';
import {View} from 'react-native';
import {Button, Text} from '../atoms';

interface ProductQuantityControlProps {
  onAddToCart: () => void;
  onDeleteProduct: () => void;
  quantity: number;
}

const ProductQuantityControl: React.FC<ProductQuantityControlProps> = ({
  quantity,
  onAddToCart,
  onDeleteProduct,
}) => {
  return (
    <View className="flex flex-row items-center bg-slate-100 ">
      <Button title="+" onPress={() => onAddToCart()} />
      <View className="px-5 text-xl bg-gray-100 h-full flex flex-row items-center justify-center">
        <Text>{quantity}</Text>
      </View>
      <Button variant="delete" title="-" onPress={() => onDeleteProduct()} />
    </View>
  );
};

export default ProductQuantityControl;
