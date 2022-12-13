import React from 'react';
import { Row, Col, List } from 'antd';

interface IProps {
  title: string;
  description: string;
  titleLayout: any;
  descriptionLayout: any;
}

const ListItem = ({
  title, description, titleLayout, descriptionLayout
}: IProps) => (
  <List.Item>
    <Row style={{ width: '100%' }}>
      <Col className="light-text" {...titleLayout}>
        {title}
      </Col>
      <Col style={{ fontWeight: 'bold' }} {...descriptionLayout}>
        {description}
      </Col>
    </Row>
  </List.Item>
);

export default ListItem;
