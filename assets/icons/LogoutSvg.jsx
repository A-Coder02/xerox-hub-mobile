import * as React from "react";
import Svg, { Path } from "react-native-svg";
const LogoutSvg = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.5 3.75H4.5V20.25H10.5"
      stroke="#FF4040"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 12H21"
      stroke="#FF4040"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.25 8.25L21 12L17.25 15.75"
      stroke="#FF4040"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default LogoutSvg;
