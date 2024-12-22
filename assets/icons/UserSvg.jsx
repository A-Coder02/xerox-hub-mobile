import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const UserSvg = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      stroke="#8C8994"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17893 14.0711 7.5 12 7.5C9.92893 7.5 8.25 9.17893 8.25 11.25C8.25 13.3211 9.92893 15 12 15Z"
      stroke="#8C8994"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.98125 18.6938C6.54554 17.5824 7.40658 16.6488 8.46894 15.9968C9.5313 15.3447 10.7535 14.9995 12 14.9995C13.2465 14.9995 14.4687 15.3447 15.5311 15.9968C16.5934 16.6488 17.4545 17.5824 18.0187 18.6938"
      stroke="#8C8994"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default UserSvg;
