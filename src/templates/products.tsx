import React, {useMemo, useState} from 'react';
import {View} from 'react-native';
import {InputField} from '../atoms';
import {ProductList} from '../organisms';
import {Product} from '../types';

interface ProductProps {
  handleAddProduct: (product: Product) => void;
  products: Product[];
  localProducts: Product[];
  isInCart: (id: string) => Product | undefined;
  handleDeleteProduct: (id: string) => void;
}
export const Products: React.FC<ProductProps> = ({
  products,
  isInCart,
  handleAddProduct,
  handleDeleteProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Memoize the filtered products
  const filteredProducts = useMemo(() => {
    return products?.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, products]);

  return (
    <>
      <View className="m-4">
        <InputField
          placeholder="Search products..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      <ProductList
        isInCart={isInCart}
        products={filteredProducts ?? []}
        onAddToCart={handleAddProduct}
        onDeleteProduct={handleDeleteProduct}
      />
    </>
  );
};
