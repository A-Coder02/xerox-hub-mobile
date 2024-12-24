// UploadSvgIcon.js
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const UploadSvgIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}  // Default width
    height={props.height || 24} // Default height
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M12 2L12 14M12 14L9 11M12 14L15 11M18 21L6 21"
      stroke={props.strokeColor || '#000'} // Default stroke color
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default UploadSvgIcon;
