import * as React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import colors from "../../utils/colors";
const ImageSvgicon = (props) => (
  <View style={{ marginLeft:props.marginLeft, marginTop:props.marginTop }}>

  <Svg
    width={props.width|| 48}
    height={props.height || 49}
    viewBox="0 0 44 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M28.5 42.5L20.1188 29.9375C20.0529 29.8329 19.9616 29.7467 19.8534 29.687C19.7452 29.6273 19.6236 29.5959 19.5 29.5959C19.3764 29.5959 19.2548 29.6273 19.1466 29.687C19.0384 29.7467 18.9471 29.8329 18.8812 29.9375L14.9625 35.825C14.8928 35.9284 14.7984 36.0129 14.6878 36.0707C14.5773 36.1284 14.454 36.1577 14.3293 36.1559C14.2046 36.154 14.0823 36.121 13.9735 36.06C13.8647 35.9989 13.7728 35.9117 13.7062 35.8062L11.8875 32.975C11.8171 32.8706 11.7222 32.785 11.611 32.7259C11.4999 32.6668 11.3759 32.6358 11.25 32.6358C11.1241 32.6358 11.0001 32.6668 10.889 32.7259C10.7778 32.785 10.6829 32.8706 10.6125 32.975L4.5 42.5H28.5Z"
      stroke={colors.primary}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M27.75 6.5V17.75H39"
      stroke={colors.primary}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M36.75 42.5H37.5C37.8978 42.5 38.2794 42.342 38.5607 42.0607C38.842 41.7794 39 41.3978 39 41V17L28.5 6.5H10.5C10.1022 6.5 9.72064 6.65804 9.43934 6.93934C9.15804 7.22064 9 7.60218 9 8V24.5"
      stroke={colors.primary}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  </View>
);
export default ImageSvgicon;
