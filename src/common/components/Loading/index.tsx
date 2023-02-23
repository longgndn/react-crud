import React, { FC } from "react";
import { Spin } from "antd";
import { LoadingWrapper } from "./styled";

type LoadingProps = {
  isOverlay?: boolean;
};
const Loading: FC<LoadingProps> = () => {
  return (
    <LoadingWrapper>
      <div className="example">
        <Spin />
      </div>
    </LoadingWrapper>
  );
};

export default Loading;
