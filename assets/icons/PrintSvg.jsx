import * as React from "react";

const PrintSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8 10V5h16v5M24 19H8v8.5h16z"
    ></path>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8 22H3.5V12c0-1.1.975-2 2.162-2h20.675c1.188 0 2.163.9 2.163 2v10H24"
    ></path>
    <path fill="#fff" d="M23.5 15.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path>
  </svg>
);

export default PrintSvg;
