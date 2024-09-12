import React from 'react';
import {Text} from '../atoms';

// Define the type for ProductInfo props
interface CartInfoProps {
  title: string;
}

const CartInfo: React.FC<CartInfoProps> = ({title}) => {
  return (
    <Text variant="caption" numberOfLines={2} ellipsizeMode="tail">
      {title}
    </Text>
  );
};

export default CartInfo;
