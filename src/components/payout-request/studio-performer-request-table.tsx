/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {
  Table, Tag, Select, message
} from 'antd';
import { PayoutRequestInterface } from 'src/interfaces';
import { formatDate, Breakpoint, getResponseError } from 'src/lib';
import { studioService } from 'src/services';
import { EditOutlined } from '@ant-design/icons';

export class StatusTitle extends React.PureComponent {
  render() {
    return <EditOutlined />;
  }
}
interface IProps {
  payouts: PayoutRequestInterface[];
  searching: boolean;
  total: number;
  pageSize: number;
  onChange(pagination, filters, sorter, extra): Function;
}

interface EditTableProps{
  title: string;
  editable: boolean;
  children: any;
  dataIndex: any;
  record: any;
  handleSave: any;
}

const { Option } = Select;
const STUDIO_PAYOUT_REQUEST_STATUS = [
  { lable: 'Pending', key: 'pending' },
  { lable: 'Approved', key: 'approved' },
  { lable: 'Rejected', key: 'rejected' },
  { lable: 'Paid', key: 'done' }
];
const EditableCell = ({
  // title,
  editable,
  children,
  // dataIndex,
  record,
  handleSave,
  ...props
}: EditTableProps) => {
  const [editing, setEditing] = React.useState(false);
  let childNode = children;
  const toggleEdit = () => {
    setEditing(!editing);
  };
  if (editable) {
    childNode = editing ? (
      <Select
        defaultValue={record.status}
        onChange={async (value) => {
          await handleSave({ ...record, status: value });
          toggleEdit();
        }}
      >
        {STUDIO_PAYOUT_REQUEST_STATUS.map((s) => (
          <Option key={s.key} value={s.key}>
            {s.lable}
          </Option>
        ))}
      </Select>
    ) : (
      <div
        className=""
        style={{
          paddingRight: 24,
          cursor: 'pointer'
        }}
        onMouseEnter={toggleEdit}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...props}>{childNode}</td>;
};

const breakPoint: Breakpoint[] = ['md'];
const format = 'DD/MM/YYYY';
const PayoutRequestList = ({
  payouts,
  searching,
  total,
  pageSize,
  onChange
}: IProps) => {
  const [dataSource, setDataSource] = React.useState([]);
  const columns = [
    {
      title: 'Name',
      key: 'q',
      dataIndex: 'performerInfo',
      render: ({ name }) => name
    },
    {
      title: 'Pay Period',
      key: 'payPeriod',
      responsive: breakPoint,
      render: ({ fromDate, toDate }: any) => (
        <span>
          {formatDate(fromDate, format)}
          {' '}
          -
          {formatDate(toDate, format)}
        </span>
      ),
      editable: false
    },
    {
      title: 'Payment Account Type',
      key: 'paymentAccountType',
      dataIndex: 'paymentAccountType',
      editable: false
    },
    {
      title: 'Tokens',
      key: 'tokenMustPay',
      dataIndex: 'tokenMustPay',
      editable: false
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color="magenta" style={{ cursor: 'pointer' }}>
          {status === 'done' ? 'paid' : status}
        </Tag>
      ),
      editable: true
    },
    {
      title: 'Date Requested',
      key: 'createdAt',
      dataIndex: 'createdAt',
      render: (createdAt: Date) => <span>{formatDate(createdAt)}</span>,
      sorter: true,
      editable: false
    }
  ];

  const save = async (request: PayoutRequestInterface) => {
    try {
      await studioService.updateStatusPerformerRequest(request._id, {
        status: request.status
      });
      const newData = [...dataSource];
      const item = newData.find((d) => d.key === request._id);
      item.status = request.status;
      setDataSource(newData);
      message.success('Update Status Success');
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(getResponseError(error));
    }
  };

  const mergeColumn = columns.map((c) => ({
    ...c,
    onCell: (record : any) => ({
      record,
      editable: c.editable,
      dataIndex: c.dataIndex,
      title: c.title,
      handleSave: save
    })
  }));

  React.useEffect(() => {
    setDataSource(payouts.map((p) => ({ ...p, key: p._id })));
  }, [payouts]);

  return (
    <Table
      dataSource={dataSource}
      components={{ body: { cell: EditableCell } }}
      rowClassName={() => 'editable-row'}
      columns={mergeColumn}
      className="table"
      pagination={{
        total,
        pageSize
      }}
      scroll={{ x: true }}
      showSorterTooltip={false}
      loading={searching}
      onChange={onChange}
    />
  );
};

export default PayoutRequestList;
