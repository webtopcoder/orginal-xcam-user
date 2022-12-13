/* eslint-disable react/react-in-jsx-scope */
import { PureComponent } from 'react';
import { Select, Form } from 'antd';

interface Props {
    label: string;
    name: string;
    dataSource: {label: string, value: any}[]
}

export class OptionProfile extends PureComponent<Props> {
  render() {
    const { label, dataSource, name } = this.props;
    return (
      <Form.Item label={label} name={name}>
        <Select>
          {dataSource.map((d) => (<Select.Option value={d.value} key={d.value}>{d.label}</Select.Option>))}
        </Select>
      </Form.Item>
    );
  }
}
