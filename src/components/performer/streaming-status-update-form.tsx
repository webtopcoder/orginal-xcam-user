import React from 'react';
import {
  Button, Input, Row, Col
} from 'antd';

interface IProps {
  submit: Function;
  status: string;
  updating: boolean;
}

export default ({ status, updating, submit }: IProps) => {
  const [value, setValue] = React.useState(status);
  const handleClick = () => {
    submit(value);
  };

  return (
    <Row gutter={[10, 10]}>
      <Col lg={18} md={16} sm={24} xs={24}>
        <Input
          placeholder="Update your status"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Col>
      <Col lg={6} md={8} sm={24} xs={24}>
        <Button
          type="primary"
          onClick={handleClick}
          loading={updating}
          className="mb-10"
          block
          disabled={updating}
        >
          Update
        </Button>
      </Col>
    </Row>
  );
};
