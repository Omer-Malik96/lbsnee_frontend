import React from 'react';
import {Image, ImageProps, ImageStyle, StyleProp} from 'react-native';

// Define the type for the ImageComponent props
interface ImageComponentProps extends ImageProps {
  tailwindClasses?: string; // Allow additional Tailwind classes
  width?: number;
  height?: number;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  tailwindClasses = '',
  width,
  height,
  style,
  ...props
}) => {
  // Combine styles with width and height
  const imageStyle: StyleProp<ImageStyle> = [{width, height}, style];

  return <Image style={imageStyle} className={tailwindClasses} {...props} />;
};

export default ImageComponent;
