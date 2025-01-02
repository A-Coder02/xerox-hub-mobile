import * as React from "react";
import Svg, { G, Rect, Path } from "react-native-svg";
import colors from "../../utils/colors";
const PlusIcon = ({ size = 100, ...props }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G opacity={0.64}>
      <Rect width={64} height={64} rx={32} fill={colors.plusIcon} />
      <Path
        d="M30.6667 33.3334H22.6667V30.6667H30.6667V22.6667H33.3334V30.6667H41.3334V33.3334H33.3334V41.3334H30.6667V33.3334Z"
        fill="white"
      />
    </G>
  </Svg>
);

export default PlusIcon;
