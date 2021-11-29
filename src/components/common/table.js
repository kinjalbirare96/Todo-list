import { Table } from 'antd';
import React from 'react';

const TableData = ({ dataSource, columns }) => {

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default TableData;


