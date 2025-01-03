import * as React from "react";
import Svg, { Path } from "react-native-svg";
const RupeeSvg = (props) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7 13h3.75c1.393 0 2.728-.474 3.713-1.318C15.447 10.838 16 9.693 16 8.5c0-1.193-.553-2.338-1.537-3.182C13.478 4.474 12.143 4 10.75 4H7M7 13l8.2 7M7 8.5h11M11 4h7"
      stroke="#000000"
      strokeWidth={1}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </Svg>
);
export default RupeeSvg;
