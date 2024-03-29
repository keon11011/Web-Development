import * as React from "react";
const SvgAddPlus = (props) => (
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
      d="M6 12h6m0 0h6m-6 0v6m0-6V6"
    />
  </svg>
);
export default SvgAddPlus;
