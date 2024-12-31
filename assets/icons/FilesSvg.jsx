import * as React from "react";
import Svg, { Path } from "react-native-svg";
const FilesSvg = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.75 21H5.25C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25V6.75C4.5 6.55109 4.57902 6.36032 4.71967 6.21967C4.86032 6.07902 5.05109 6 5.25 6H12.75L16.5 9.75V20.25C16.5 20.4489 16.421 20.6397 16.2803 20.7803C16.1397 20.921 15.9489 21 15.75 21Z"
      stroke="#343330"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.5 6V3.75C7.5 3.55109 7.57902 3.36032 7.71967 3.21967C7.86032 3.07902 8.05109 3 8.25 3H15.75L19.5 6.75V17.25C19.5 17.4489 19.421 17.6397 19.2803 17.7803C19.1397 17.921 18.9489 18 18.75 18H16.5"
      stroke="#343330"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.25 14.25H12.75"
      stroke="#343330"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.25 17.25H12.75"
      stroke="#343330"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default FilesSvg;
