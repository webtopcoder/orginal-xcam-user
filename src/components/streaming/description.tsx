import { useState, useEffect, useCallback } from 'react';
import { List, Row, Col } from 'antd';
import NumberFormat from '@components/common/layout/numberformat';
import moment from 'moment';

interface P {
  roomJoined: boolean;
  receivedToken: number;
}

const ListItem = ({ description, title }: any) => (
  <List.Item>
    <Row style={{ width: '100%' }}>
      <Col className="light-text" sm={{ span: 6 }} xs={{ span: 12 }}>
        {title}
      </Col>
      <Col style={{ fontWeight: 'bold' }} sm={{ span: 18 }} xs={{ span: 12 }}>
        {description}
      </Col>
    </Row>
  </List.Item>
);

let interval: NodeJS.Timeout;
let startAt: moment.Moment;

export const Description = ({ roomJoined, receivedToken }: P) => {
  const [callTime, setCallTime] = useState(null);

  const handleCallTime = useCallback(() => {
    if (startAt) {
      const diff = moment().diff(startAt);
      setCallTime(moment.utc(diff).format('HH:mm:ss'));
    }
  }, [callTime]);

  useEffect(() => {
    if (roomJoined) {
      startAt = moment();
      setInterval(handleCallTime, 1000);
    } else {
      startAt = null;
      interval && clearInterval(interval);
    }
  }, [roomJoined]);

  const dataSource = [
    {
      title: 'Call time',
      description: `${callTime || 0}`
    },
    {
      title: 'Status',
      description: roomJoined ? 'Live' : ''
    },
    {
      title: 'Received Token',
      description: <NumberFormat value={receivedToken} suffix=" token(s)" />
    }
  ];
  return (
    <List
      dataSource={dataSource}
      renderItem={(item) => (
        <ListItem description={item.description} title={item.title} />
      )}
    />
  );
};
