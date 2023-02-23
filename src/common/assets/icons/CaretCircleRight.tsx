import { FC } from "react";

import { SvgProps } from "@common/types";

const CaretCircleRight: FC<SvgProps> = ({ strokeColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={strokeColor || "#EA5506"}
        strokeMiterlimit="10"
        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
      ></path>
      <path
        stroke={strokeColor || "#EA5506"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.875 8.625L14.625 12l-3.75 3.375"
      ></path>
    </svg>
  );
};

export default CaretCircleRight;
