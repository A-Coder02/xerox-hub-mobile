import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
import colors from "../../utils/colors";

const PrintSvgIcon = ({ width = 48, height = 48, ...props }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={48} height={48} rx={8} fill={colors.lightGreen} fillOpacity={0.17} />
    <Rect
      x={0.5}
      y={0.5}
      width={47}
      height={47}
      rx={7.5}
      stroke={colors.primary}
      strokeOpacity={0.17}
    />
    <Path
      d="M16 18V13H32V18"
      stroke={colors.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M32 27H16V35.5H32V27Z"
      stroke={colors.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 30H11.5V20C11.5 18.9 12.475 18 13.6625 18H34.3375C35.525 18 36.5 18.9 36.5 20V30H32"
      stroke={colors.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M31.5 23.5C32.0523 23.5 32.5 23.0523 32.5 22.5C32.5 21.9477 32.0523 21.5 31.5 21.5C30.9477 21.5 30.5 21.9477 30.5 22.5C30.5 23.0523 30.9477 23.5 31.5 23.5Z"
      fill={colors.primary}
    />
  </Svg>
);

export default PrintSvgIcon;
