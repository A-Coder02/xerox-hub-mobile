import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PencilSvg = (props) => (
  <Svg
    width={48}
    height={48}
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.3375 27H6.75C6.48478 27 6.23043 26.8947 6.04289 26.7071C5.85536 26.5196 5.75 26.2652 5.75 26V20.4125C5.74954 20.2827 5.7747 20.154 5.82404 20.0339C5.87337 19.9138 5.94591 19.8046 6.0375 19.7125L21.0375 4.71251C21.1305 4.61803 21.2415 4.54299 21.3638 4.49178C21.4861 4.44056 21.6174 4.41418 21.75 4.41418C21.8826 4.41418 22.0139 4.44056 22.1362 4.49178C22.2585 4.54299 22.3694 4.61803 22.4625 4.71251L28.0375 10.2875C28.132 10.3806 28.207 10.4915 28.2582 10.6138C28.3095 10.7361 28.3358 10.8674 28.3358 11C28.3358 11.1326 28.3095 11.2639 28.2582 11.3862C28.207 11.5086 28.132 11.6195 28.0375 11.7125L13.0375 26.7125C12.9455 26.8041 12.8362 26.8766 12.7161 26.926C12.596 26.9753 12.4673 27.0005 12.3375 27Z"
      fill="white"
      stroke="#50C878"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.75 8L24.75 15"
      stroke="#50C878"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.25 11.5L9.25 23.5"
      stroke="#50C878"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.6875 26.9375L5.8125 20.0625"
      stroke="#50C878"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default PencilSvg;
