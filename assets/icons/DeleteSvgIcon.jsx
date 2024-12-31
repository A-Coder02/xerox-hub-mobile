import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const DeleteSvgIcon = (props) => (
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
      stroke="#FF4040"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M10 10h12M12 10v12m8-12v12"
    />
    <Path
      stroke="#FF4040"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12 28h8c1.1 0 2-.9 2-2V10H10v16c0 1.1.9 2 2 2ZM8 10V5h16v5"
    />
  </Svg>
);

export default DeleteSvgIcon;
