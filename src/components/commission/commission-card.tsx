/* eslint-disable no-shadow */
import React from 'react';
import {
  Card, message, Row, Col
} from 'antd';
import { performerService, studioService } from 'src/services';
import { getResponseError } from '@lib/utils';
import './commission-card.less';

export enum ROLE {
  PERFORMER = 'perfomrer',
  USER = 'user',
  STUDIO = 'studio'
}
const DataMap = [
  { lable: 'Tip Commission', key: 'tipCommission' },
  { lable: 'Private Call Commission', key: 'privateCallCommission' },
  { lable: 'Group Call Commission', key: 'groupCallCommission' },
  { lable: 'Product Commission', key: 'productCommission' },
  { lable: 'Gallery Commission', key: 'albumCommission' },
  { lable: 'Video Commission', key: 'videoCommission' }
];
const style = {
  headStyle: {
    color: '#ff0066'
  },
  bodyStyle: {
    color: '#000000'
  }
};

interface IProps {
  role?: ROLE.STUDIO | ROLE.PERFORMER;
  // tabText?: string;
}

const CommissionCard = ({ role }: IProps) => {
  const [commission, setCommission] = React.useState(null);
  const getInfoStudio = () => studioService.me();
  React.useEffect(() => {
    const getCommission = async () => {
      try {
        const resp = role === ROLE.STUDIO
          ? await getInfoStudio()
          : await performerService.getCommission();
        setCommission(resp.data);
      } catch (e) {
        const err = await Promise.resolve(e);
        message.error(getResponseError(err));
      }
    };
    getCommission();
  }, []);
  return (
    <>
      {commission
        && (role === 'studio' ? (
          <Row gutter={[10, 10]}>
            {DataMap.map((m) => (
              <Col xs={24} sm={8} key={m.key}>
                <Card
                  className="card-studio-commission"
                  {...style}
                  title={<span>{m.lable}</span>}
                  extra={(
                    <span style={{ color: '#ff0066' }}>
                      {commission[m.key]}
                      %
                    </span>
               )}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <Row gutter={[10, 10]}>
            {DataMap.map((m) => (
              <Col xs={24} sm={8} key={m.key}>
                <Card
                  {...style}
                  title={<span>{m.lable}</span>}
                  extra={(
                    <span style={{ color: '#ff0066' }}>
                      {commission[m.key] || commission}
                      %
                    </span>
                  )}
                >
                  Hint: When a member spends paid tokens with you, you will get
                  this commission.
                </Card>
              </Col>
            ))}
          </Row>
        ))}
    </>
  );
};
CommissionCard.defaultProps = {
  role: ''
};

export default CommissionCard;
