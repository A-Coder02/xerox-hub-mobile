import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const WordSvgIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <Rect
      x="0"
      y="0"
      width="32"
      height="32"
      rx="6"
      fill="#E7F9EE"
    />
    <Path
      fill="#3ABC65"
      d="M11 14h2l1 4 1-4h2l1 4 1-4h2v6h-2l-1-4-1 4h-2l-1-4-1 4h-2v-6Z"
    />
  </Svg>
);

export default WordSvgIcon;
