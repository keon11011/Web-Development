import * as React from "react";
const SvgChartLine = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.25em"
    height="1.25em"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 15v1.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218H21M3 15V5m0 10 3.853-3.21.004-.003c.697-.581 1.046-.872 1.425-.99.447-.14.929-.118 1.362.061.367.153.688.474 1.332 1.118l.006.006c.654.654.981.982 1.354 1.133a2 2 0 0 0 1.385.046c.383-.128.733-.434 1.433-1.046L21 7"
    />
  </svg>
);
export default SvgChartLine;
