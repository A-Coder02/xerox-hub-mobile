import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const PdfSvgIcon = (props) => (
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
      fill="#FFEEEE"
    />
    <Path
      fill="#FF4040"
      d="M12 14v6h2v-2h2c1 0 2-1 2-2s-1-2-2-2h-4Zm2 2v-2h2c.5 0 1 .5 1 1s-.5 1-1 1h-2ZM20 14v6h2v-4h2v-2h-4Z"
    />
  </Svg>
);

export default PdfSvgIcon;
