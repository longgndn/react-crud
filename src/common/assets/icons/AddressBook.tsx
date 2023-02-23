import { FC } from "react";
import { SvgProps } from "@common/types";

const AddressBook: FC<SvgProps> = ({ strokeColor }) => {
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
        d="M12.75 13.5a3 3 0 100-6 3 3 0 000 6zM3 10.125h2.25M3 6.375h2.25M3 13.875h2.25M3 17.625h2.25M8.25 15.75a5.626 5.626 0 019 0"
      ></path>
      <path
        stroke={strokeColor || "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20.25 20.25V3.75A.75.75 0 0019.5 3H6a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75z"
      ></path>
    </svg>
  );
};

export default AddressBook;
