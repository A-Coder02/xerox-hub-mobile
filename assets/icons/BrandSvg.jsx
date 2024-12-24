import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BrandSvg = ({color = "#50C878", ...otherProps}) => (
  <Svg
    width={100}
    height={100}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
  >
    <Path
      d="M87.5 69.2578V30.7422C87.497 30.1858 87.3474 29.6401 87.0662 29.1601C86.785 28.68 86.3822 28.2825 85.8984 28.0078L51.5234 8.67188C51.0603 8.40446 50.5348 8.26367 50 8.26367C49.4652 8.26367 48.9397 8.40446 48.4766 8.67188L14.1016 28.0078C13.6178 28.2825 13.215 28.68 12.9338 29.1601C12.6526 29.6401 12.503 30.1858 12.5 30.7422V69.2578C12.503 69.8142 12.6526 70.3599 12.9338 70.8399C13.215 71.32 13.6178 71.7175 14.1016 71.9922L48.4766 91.3281C48.9397 91.5955 49.4652 91.7363 50 91.7363C50.5348 91.7363 51.0603 91.5955 51.5234 91.3281L85.8984 71.9922C86.3822 71.7175 86.785 71.32 87.0662 70.8399C87.3474 70.3599 87.497 69.8142 87.5 69.2578V69.2578Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M87.0703 29.1406L50.3516 50L12.9297 29.1406"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M50.3516 50L50 91.7188"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M69.1406 18.5547L50 29.3359L30.8594 18.5547"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M68.75 81.6406V60.1172L87.5 49.5703"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M31.25 81.6406V60.1172L12.5 49.5703"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BrandSvg;
