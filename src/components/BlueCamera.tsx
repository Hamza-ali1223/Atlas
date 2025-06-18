import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const BlueCamera = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={9}
    fill="none"
    {...props}
  >
    <Path
      fill="#4A8CFF"
      d="M0 .596v5.86a2.398 2.398 0 0 0 2.407 2.386h8.541a.436.436 0 0 0 .438-.433v-5.86A2.398 2.398 0 0 0 8.98.163H.44A.436.436 0 0 0 0 .596Zm11.93 2.286L15.456.306c.306-.253.544-.19.544.27V8.43c0 .523-.29.46-.544.27L11.93 6.127V2.882Z"
    />
  </Svg>
);

