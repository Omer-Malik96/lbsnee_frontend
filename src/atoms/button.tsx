import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

// Define variant styles as utility classes
const variantStyles = {
  default: {button: 'bg-gray-300 p-2 rounded', text: 'text-black'},
  primary: {button: 'bg-blue-500  p-2 rounded', text: 'text-white'},
  secondary: {button: 'bg-green-500 p-2 rounded', text: 'text-white'},
  delete: {button: 'bg-red-500  p-2 rounded', text: 'text-white'},
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
  const buttonStyle = variantStyles[variant]?.button;
  const textStyle = variantStyles[variant]?.text;

  return (
    <TouchableOpacity
      tw={`${buttonStyle} ${style}`} // Combine NativeWind styles with any additional styles
      {...props}>
      <Text tw={`${textStyle} text-center font-bold`}>{title}</Text>
    </TouchableOpacity>
  );
};
