import React from 'react';
import {Text, TextProps} from 'react-native';

// Define the type for the text component props
interface CustomTextProps extends TextProps {
  variant?: 'default' | 'heading' | 'subheading';
}

// Define styles based on variant
const variantStyles = {
  default: 'text-base text-gray-700',
  heading: 'text-xl font-bold text-black',
  subheading: 'text-lg text-gray-600',
};

export const TextComponent: React.FC<CustomTextProps> = ({
  variant = 'default',
  style,
  children,
  ...props
}) => {
  // Get the styles for the selected variant
  const textStyle = variantStyles[variant];

  return (
    <Text tw={`${textStyle} ${style}`} {...props}>
      {children}
    </Text>
  );
};
