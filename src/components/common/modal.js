import React from 'react';
import { Modal } from 'antd';

const ModalData = ({ title, handleCancel, handleOk, isModalVisible, children }) => {
  return (
    <Modal title={title} visible={isModalVisible} onOk={() => handleOk} onCancel={() => handleCancel}>
      {children}
    </Modal>
  );
};

export default ModalData;