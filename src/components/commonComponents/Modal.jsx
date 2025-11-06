import React from "react";
import { Modal as AntModel, Button } from "antd";

const Modal = ({
  open,
  title = "Modal Title",
  onClose,
  onOk,
  children,
  okText = "OK",
  cancelText = "Cancel",
  showFooter = true,
}) => {
  return (
    <AntModel
      title={
        <div
          className="border-b border-gray-300 w-full"
          style={{ margin: 0, padding: "0px 0" }}
        >
          <span className="pl-4 pt-4">{title}</span>
        </div>
      }
      open={open}
      onCancel={onClose}
      centered
      footer={
        showFooter ? (
          <div
            className="border-t border-gray-300 w-full flex justify-end gap-2"
            style={{ margin: 0, padding: "10px 10px 0px 10px" }}
          >
            <Button onClick={onClose}>{cancelText}</Button>
            <Button type="primary" onClick={onOk}>
              {okText}
            </Button>
          </div>
        ) : null
      }
      bodyStyle={{
        marginTop: "20px",
        paddingBottom: "16px",
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      {children}
    </AntModel>
  );
};

export default Modal;
