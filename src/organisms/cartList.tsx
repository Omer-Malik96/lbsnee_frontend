import React from 'react';
import {FlatList, View} from 'react-native';
import {Text} from '../atoms';
import {CartCard} from '../molecules';
import {Product} from '../types';

// Define the type for CartList props
interface CartListProps {
  products: Product[];
  handleRemoveProduct: (id: string) => void;
  onAddToCart: (product: Product) => void;
}

export const CartList: React.FC<CartListProps> = ({
  products,
  handleRemoveProduct,
  onAddToCart,
}) => {
  const renderItem = ({item}: {item: Product}) => (
    <View className="mb-4">
      <CartCard
        title={item.name}
        imageUrl={item.image}
        quantity={item.quantity}
        onAddToCart={() => onAddToCart(item)}
        onDeleteProduct={() => handleRemoveProduct(item.id)}
      />
    </View>
  );

  return (
    <View className="flex flex-1 p-4">
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text>No items in cart</Text>}
      />
    </View>
  );
};
