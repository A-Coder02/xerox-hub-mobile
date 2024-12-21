import React from 'react';
import { Text } from 'react-native';
import colors from '../../utils/colors';

/**
 * Typography component for styled text.
 * 
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The text content to display.
 * @param {'base' | 'caption' | 'small' | 'h1' | 'h2' | 'h3'} [props.variant='base'] - The font style variant.
 * @param {keyof typeof colors} [props.color='black'] - Text color (from predefined color palette).
 * @param {number} [props.fontSize] - Custom font size.
 * @param {number} [props.fontWeight] - Custom font weight.
 * @param {Object} [props.style] - Additional custom styles.
 */
const Typography = ({
  children,
  variant = 'base',
  color = 'black',
  fontSize,
  fontWeight,
  style = {}
}) => {
  const variantStyle = getVariant(variant, color, fontSize, fontWeight);
  return <Text style={[variantStyle, style]}>{children}</Text>;
};

export default Typography;

/**
 * Helper function to determine styles.
 * 
 * @param {'base' | 'caption' | 'small' | 'h1' | 'h2' | 'h3'} fontStyle - The font style variant.
 * @param {keyof typeof colors} color - Text color.
 * @param {number} [fontSize] - Custom font size.
 * @param {number} [fontWeight] - Custom font weight.
 * @returns {Object} - The style object.
 */
const getVariant = (variant, color, fontSize, fontWeight) => {
  const colorValue = colors[color] || colors.black;

  const defaultStyles = {
    base: { fontSize: 16, fontWeight: 400 },
    caption: { fontSize: 14, fontWeight: 400 },
    small: { fontSize: 10, fontWeight: 400 },
    h1: { fontSize: 32, fontWeight: 500 },
    h2: { fontSize: 24, fontWeight: 500 },
    h3: { fontSize: 18, fontWeight: 500 },
  };

  const { fontSize: defaultFontSize, fontWeight: defaultFontWeight } = defaultStyles[variant] || defaultStyles.base;

  return {
    fontSize: fontSize || defaultFontSize,
    fontWeight: fontWeight || defaultFontWeight,
    color: colorValue,
    fontFamily: getFontFamily(fontWeight)
  };
};

const getFontFamily = fontWeight => {
  switch (fontWeight) {
    case 100: return 'Poppins-Thin';
    case 200: return 'Poppins-ExtraLight';
    case 300: return 'Poppins-Light';
    case 400: return 'Poppins-Regular';
    case 500: return 'Poppins-Medium';
    case 600: return 'Poppins-SemiBold';
    case 700: return 'Poppins-Bold';
    case 800: return 'Poppins-ExtraBold';
    case 900: return 'Poppins-Black';
  }
}