import { PageHeader, Divider } from 'antd';

interface P {
  title: any;
  // eslint-disable-next-line react/require-default-props
  extra?: any;
}

export default ({ title, extra } : P) => (
  <>
    <PageHeader title={title} extra={extra} />
    <Divider />
  </>
);
