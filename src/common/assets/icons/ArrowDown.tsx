import { FC } from "react";

import { SvgProps } from "@common/types";

const ArrowDown: FC<SvgProps> = ({ strokeColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke={strokeColor || "#fff"}
        strokeLinecap="round"
        d="M12.666 6L8.52 9.554a.8.8 0 01-1.04 0L3.332 6"
      ></path>
    </svg>
  );
};

export default ArrowDown;
