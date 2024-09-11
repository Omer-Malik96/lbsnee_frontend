import React, {useState} from 'react';
import {View} from 'react-native';
import {InputField} from '../atoms';
import {ProductList} from '../organisms';
import {ProductProps} from '../organisms/ProductList';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [products, setProducts] = useState<ProductProps[]>([
    // Sample product data
    {
      id: '1',
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Product 1',
      description: 'Description 1',
      price: '$19.99',
    },
    {
      id: '2',
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Product 2',
      description: 'Description 2',
      price: '$29.99',
    },
    {
      id: '3',
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Product 3',
      description: 'Description 3',
      price: '$39.99',
    },
  ]);

  const onAddToCart = (id: string) => {
    console.log(`Add to Cart clicked for product with id ${id}`);
  };

  const onViewDetails = (id: string) => {
    console.log(`View Details clicked for product with id ${id}`);
  };

  // Filter products based on searchTerm
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
        products={filteredProducts}
        onAddToCart={onAddToCart}
        onViewDetails={onViewDetails}
      />
    </>
  );
};

export default Products;
