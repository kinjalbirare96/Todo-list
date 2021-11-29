import React from 'react';
import { Button } from 'antd';

const button = ({ type, text, onClick }) => {
  return (
    <div>
      <Button type={type} onClick={onClick}>{text}</Button>
    </div>
  );
};

export default button;