import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

// Define variant styles as utility classes
const variantStyles = {
  default: 'bg-gray-300 text-black p-4 rounded',
  primary: 'bg-blue-500 text-white p-4 rounded',
  secondary: 'bg-green-500 text-white p-4 rounded',
};

// Define the type for the variant prop
type Variant = keyof typeof variantStyles;

interface ButtonProps extends TouchableOpacityProps {
  variant?: Variant;
  title: string;
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  variant = 'default',
  title,
  style,
  ...props
}) => {
  // Determine button styles based on the variant prop
  const buttonStyle = variantStyles[variant];

  return (
    <TouchableOpacity
      tw={`${buttonStyle} ${style}`} // Combine NativeWind styles with any additional styles
      {...props}>
      <Text tw={`text-center font-bold`}>{title}</Text>
    </TouchableOpacity>
  );
};
