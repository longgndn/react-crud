import { FC } from "react";
import { SvgProps } from "@common/types";

const Add: FC<SvgProps> = ({ strokeColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={strokeColor || "#FF8138"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 5v14M5 12h14"
      ></path>
    </svg>
  );
};

export default Add;
