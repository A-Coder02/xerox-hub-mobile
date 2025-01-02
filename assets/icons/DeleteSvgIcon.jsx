import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
import colors from "../../utils/colors";

const DeleteSvgIcon = ({ color = colors.red, width, height, ...props }) => (
  <Svg
    width={width || 48}
    height={height || 48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={48} height={48} rx={8} fill={color} fillOpacity={0.28} />
    <Path
      d="M35 15H13"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21 21V29"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M27 21V29"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M33 15V34C33 34.2652 32.8946 34.5196 32.7071 34.7071C32.5196 34.8946 32.2652 35 32 35H16C15.7348 35 15.4804 34.8946 15.2929 34.7071C15.1054 34.5196 15 34.2652 15 34V15"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M29 15V13C29 12.4696 28.7893 11.9609 28.4142 11.5858C28.0391 11.2107 27.5304 11 27 11H21C20.4696 11 19.9609 11.2107 19.5858 11.5858C19.2107 11.9609 19 12.4696 19 13V15"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default DeleteSvgIcon;
