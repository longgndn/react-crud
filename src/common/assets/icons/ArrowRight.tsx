import { FC } from "react";

import { SvgProps } from "@common/types";

const ArrowRight: FC<SvgProps> = ({ strokeColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={strokeColor || "#232323"}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9 19l5.33-6.22a1.2 1.2 0 000-1.56L9 5"
      ></path>
    </svg>
  );
};

export default ArrowRight;
