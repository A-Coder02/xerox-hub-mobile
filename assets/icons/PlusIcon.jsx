import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PlusSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 8v16M8 16h16"
    />
  </Svg>
);

export default PlusSvg;
