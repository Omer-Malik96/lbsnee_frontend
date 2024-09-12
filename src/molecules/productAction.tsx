import React from 'react';
import {View} from 'react-native';
import {Button} from '../atoms';
import {Product} from '../types';
import ProductQuantityControl from './quantityButton';

// Define the type for ProductActions props
interface ProductActionsProps {
  onAddToCart: () => void;
  onDeleteProduct: () => void;
  productInCart: Product | undefined;
}

const ProductActions: React.FC<ProductActionsProps> = ({
  onAddToCart,
  onDeleteProduct,
  productInCart,
}) => {
  return (
    <View className="my-2 flex flex-row justify-between">
      {productInCart == undefined ? (
        <Button title="Add to Cart" onPress={onAddToCart} variant="primary" />
      ) : (
        <ProductQuantityControl
          onAddToCart={onAddToCart}
          onDeleteProduct={onDeleteProduct}
          quantity={productInCart.quantity}
        />
      )}
    </View>
  );
};

export default ProductActions;
