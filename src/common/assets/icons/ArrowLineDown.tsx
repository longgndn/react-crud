import { FC } from "react";

import { SvgProps } from "@common/types";

const ArrowLineDown: FC<SvgProps> = ({ strokeColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={strokeColor || "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 3v14.25M18.75 10.5L12 17.25 5.25 10.5M20.25 20.25H3.75"
      ></path>
    </svg>
  );
};

export default ArrowLineDown;
