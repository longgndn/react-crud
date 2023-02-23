import React, { FC } from "react";
import useTable, { Props, ReceivedProps } from "./hook";
import { TableLayoutWrapper } from "./styled";

const TableLayout: FC<Props> = ({ data, columns }) => {
  return <TableLayoutWrapper dataSource={data} columns={columns} />;
};

const Table: FC<ReceivedProps> = (props) => (
  <TableLayout {...useTable(props)} />
);

export default Table;
