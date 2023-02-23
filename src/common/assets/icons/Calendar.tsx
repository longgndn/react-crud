import { FC } from "react";

import { SvgProps } from "@common/types";

const Calendar: FC<SvgProps> = ({ strokeColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 25 24"
    >
      <path
        stroke={strokeColor || "#757575"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8.5 7V3m8 4V3m-9 8h10m-12 10h14a2 2 0 002-2V7a2 2 0 00-2-2h-14a2 2 0 00-2 2v12a2 2 0 002 2z"
      ></path>
    </svg>
  );
};

export default Calendar;
