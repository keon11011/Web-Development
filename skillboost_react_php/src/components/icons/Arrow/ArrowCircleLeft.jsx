import * as React from "react";
const SvgArrowCircleLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m11 9-3 3m0 0 3 3m-3-3h8m5 0a9 9 0 1 0-18 0 9 9 0 0 0 18 0"
    />
  </svg>
);
export default SvgArrowCircleLeft;
