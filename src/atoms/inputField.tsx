import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

// Define the type for the input field component props
interface InputFieldProps extends TextInputProps {
  variant?: 'default' | 'rounded' | 'outline';
}

// Define styles based on variant
const variantStyles = {
  default: 'bg-gray-200 text-black p-4 rounded-md',
  rounded: 'bg-gray-200 text-black p-4 rounded-full',
  outline: 'bg-white border border-gray-400 text-black p-4 rounded-md',
};

export const InputFieldComponent: React.FC<InputFieldProps> = ({
  variant = 'default',
  style,
  ...props
}) => {
  // Get the styles for the selected variant
  const inputStyle = variantStyles[variant];

  return (
    <TextInput
      tw={`${inputStyle} ${style}`} // Combine NativeWind styles with any additional styles
      {...props}
    />
  );
};
