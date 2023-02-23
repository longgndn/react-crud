import { FC } from "react";

import { SvgProps } from "@common/types";

const ArrowDown3: FC<SvgProps> = ({ strokeColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="8"
      fill="none"
      viewBox="0 0 16 8"
    >
      <path
        stroke={strokeColor || "#717171"}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15 1L8.781 6.33a1.2 1.2 0 01-1.562 0L1 1"
      ></path>
    </svg>
  );
};

export default ArrowDown3;
