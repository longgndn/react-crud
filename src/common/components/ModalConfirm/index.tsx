// import { IProps } from "@common/types";
import { Modal } from "antd";
import { FC } from "react";
import { ModalConfirmWrapper } from "./styled";

type IProps = {
  open: any;
  onOk: any;
  onCancel: any;
  okText: string;
  cancelText: string;
  content: string;
  title: string;
};

const ModalConfirm: FC<IProps> = ({
  open,
  onOk,
  onCancel,
  okText,
  cancelText,
  content,
  title,
}) => {
  return (
    <ModalConfirmWrapper>
      <Modal
        title={title}
        open={open}
        onOk={onOk}
        onCancel={onCancel}
        okText={okText}
        cancelText={cancelText}
      >
        <p>{content}</p>
      </Modal>
    </ModalConfirmWrapper>
  );
};
export default ModalConfirm;
