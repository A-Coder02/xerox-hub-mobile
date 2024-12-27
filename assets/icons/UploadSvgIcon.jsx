import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const UploadSvgIcon = (props) => (
  <Svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.0625 8.1875L12 4.25L15.9375 8.1875"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 14.75V4.25"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.25 14.75V20C20.25 20.1989 20.171 20.3897 20.0303 20.5303C19.8897 20.671 19.6989 20.75 19.5 20.75H4.5C4.30109 20.75 4.11032 20.671 3.96967 20.5303C3.82902 20.3897 3.75 20.1989 3.75 20V14.75"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default UploadSvgIcon;
