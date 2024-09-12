import React from 'react';
import {Image, View} from 'react-native';
import CartInfo from './cartInfo';
import ProductQuantityControl from './quantityButton';

interface CartCardProps {
  imageUrl: string;
  title: string;
  quantity: number;
  onAddToCart: () => void;
  onDeleteProduct: () => void;
}

const CartCard: React.FC<CartCardProps> = ({
  imageUrl,
  title,
  quantity,
  onAddToCart,
  onDeleteProduct,
}) => {
  return (
    <View className="flex flex-row items-center p-3 border-b border-[#ddd] bg-white rounded-md justify-between">
      <Image source={{uri: imageUrl}} className="mr-2" width={50} height={50} />
      <View className="w-1/2">
        <CartInfo title={title} />
      </View>
      <ProductQuantityControl
        quantity={quantity}
        onAddToCart={onAddToCart}
        onDeleteProduct={onDeleteProduct}
      />
    </View>
  );
};

export default CartCard;
