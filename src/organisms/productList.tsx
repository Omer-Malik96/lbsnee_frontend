import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {ProductCard} from '../molecules';

// Define the type for Product props
export interface ProductProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
}
// Define the type for ProductList props
interface ProductListProps {
  products: ProductProps[];
  onAddToCart: (id: string) => void;
  onViewDetails: (id: string) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  onAddToCart,
  onViewDetails,
}) => {
  const renderItem = ({item}: {item: ProductProps}) => (
    <ProductCard
      {...item}
      onAddToCart={() => onAddToCart(item.id)}
      onViewDetails={() => onViewDetails(item.id)}
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
