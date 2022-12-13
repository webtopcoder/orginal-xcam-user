import React from 'react';
import { Button, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

interface P {
  confirm: (e?: React.MouseEvent<HTMLElement>) => void;
}

const PopupConfirm = ({ confirm }: P) => (
  <Popconfirm
    title="Are you sure want to delete this item?"
    okText="Yes I want to delete"
    cancelText="I dont'want to delete"
    placement="right"
    onConfirm={confirm}
  >
    <Button type="link">
      <DeleteOutlined />
    </Button>
  </Popconfirm>
);
PopupConfirm.defaultProps = {};

export default PopupConfirm;
