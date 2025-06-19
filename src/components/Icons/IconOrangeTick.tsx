import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
export const IconOrangeTick = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
      cx={12}
      cy={12}
      r={11}
      fill="#FF7622"
      stroke="white"
      strokeWidth={2}
    />
    <Path
      d="M17.0001 9L10.8125 15.1876L8 12.375"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
