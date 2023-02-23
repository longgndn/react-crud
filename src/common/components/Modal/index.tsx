import React, { FC } from "react";
import Loading from "../Loading";
import { ModalFormWrapper } from "./styled";

type IProps = {
  visible: boolean;
  children: React.ReactNode;
  className?: string;
  width?: number;
  footer?: JSX.Element;
  loading?: boolean;
  onOk?: any;
  onCancel?: any;
};

const ModalForm: FC<IProps> = ({
  visible,
  children,
  width = 800,
  loading = false,
  footer,
  onCancel,
  onOk,
}) => {
  return (
    <ModalFormWrapper
      width={width}
      visible={visible}
      footer={footer}
      closeIcon={<></>}
      onOk={onOk}
      onCancel={onCancel}
    >
      {loading ? <Loading /> : children}
    </ModalFormWrapper>
  );
};

export default ModalForm;
