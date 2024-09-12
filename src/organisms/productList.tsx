import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {ProductCard} from '../molecules';
import {Product} from '../types';

// Define the type for ProductList props
interface ProductListProps {
  products: Product[];
  onAddToCart: (id: Product) => void;
  onDeleteProduct: (id: string) => void;
  isInCart: (id: string) => Product | undefined;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  onAddToCart,
  onDeleteProduct,
  isInCart,
}) => {
  const renderItem = ({item}: {item: Product}) => (
    <ProductCard
      {...item}
      isInCart={() => isInCart(item.id)}
      onAddToCart={() => onAddToCart(item)}
      onDeleteProduct={() => onDeleteProduct(item.id)}
    />
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
  },
});
