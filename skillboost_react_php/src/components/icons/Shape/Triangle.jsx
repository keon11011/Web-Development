import * as React from "react";
const SvgTriangle = (props) => (
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
      d="M4.379 15.2c-.91 1.575-1.364 2.363-1.296 3.01a2 2 0 0 0 .813 1.408C4.422 20 5.331 20 7.15 20h9.703c1.817 0 2.726 0 3.251-.382a2 2 0 0 0 .814-1.408c.068-.647-.386-1.435-1.296-3.01l-4.85-8.4c-.909-1.575-1.364-2.363-1.958-2.627a2 2 0 0 0-1.627 0c-.593.264-1.048 1.052-1.957 2.625z"
    />
  </svg>
);
export default SvgTriangle;
