import * as React from "react";
import Svg, { Path } from "react-native-svg";
const rightArrowSvgIcon = (props) => (
  <Svg
    width={props.width||16}
    height={props.height||16}
    viewBox="0 0 10 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.66675 1.83329L8.33341 8.49996L1.66675 15.1666"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default rightArrowSvgIcon;