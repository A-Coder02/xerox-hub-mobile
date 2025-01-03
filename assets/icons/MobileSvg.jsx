import * as React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";
const MobileSvg = (props) => (
  <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="800px"
    height="800px"
    viewBox="0 0 32 32"
    enableBackground="new 0 0 32 32"
    xmlSpace="preserve"
    {...props}
  >
    <G>
      <Path
        fill="#828282"
        d="M1.5,32h14c0.276,0,0.5-0.224,0.5-0.5S15.776,31,15.5,31h-14C1.224,31,1,30.776,1,30.5v-29 C1,1.224,1.224,1,1.5,1h21C22.776,1,23,1.224,23,1.5v5C23,6.776,23.224,7,23.5,7S24,6.776,24,6.5v-5C24,0.673,23.327,0,22.5,0h-21 C0.673,0,0,0.673,0,1.5v29C0,31.327,0.673,32,1.5,32z"
      />
      <Path
        fill="#828282"
        d="M18,10.5v20c0,0.827,0.673,1.5,1.5,1.5h11c0.827,0,1.5-0.673,1.5-1.5v-20C32,9.673,31.327,9,30.5,9h-11 C18.673,9,18,9.673,18,10.5z M31,10.5v20c0,0.276-0.224,0.5-0.5,0.5h-11c-0.276,0-0.5-0.224-0.5-0.5v-20c0-0.276,0.224-0.5,0.5-0.5 h11C30.776,10,31,10.224,31,10.5z"
      />
      <Circle fill="#828282" cx={12} cy={28} r={1} />
      <Circle fill="#828282" cx={25} cy={28} r={1} />
    </G>
  </Svg>
);
export default MobileSvg;
