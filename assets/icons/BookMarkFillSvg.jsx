import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BookMarkFillSvg = (props) => (
  <Svg
    width={26}
    height={37}
    viewBox="0 0 26 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M25 36L13 28.5L1 36V3C1 2.60218 1.15804 2.22064 1.43934 1.93934C1.72064 1.65804 2.10218 1.5 2.5 1.5H23.5C23.8978 1.5 24.2794 1.65804 24.5607 1.93934C24.842 2.22064 25 2.60218 25 3V36Z"
      fill="white"
      stroke="#242424"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BookMarkFillSvg;
