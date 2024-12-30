import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PlusIcon = (props) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.66675 11.3334H0.666748V8.66669H8.66675V0.666687H11.3334V8.66669H19.3334V11.3334H11.3334V19.3334H8.66675V11.3334Z"
      fill={props.color}
    />
  </Svg>
);
export default PlusIcon;
