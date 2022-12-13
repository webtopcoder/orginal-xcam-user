import React from 'react';
import {
  Row, Col, Drawer, Button, Menu, Space
} from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { ICountries, IPerformerCategogies } from 'src/interfaces';
import classnames from 'classnames';
import './performer-filter.less';

interface IProps {
  countries?: ICountries[];
  categories?: IPerformerCategogies[];
  // offset?: number;
  // limit?: number;
  gender?: string;
  category?: string;
  country?: string;
  setFilter: Function;
  clearFilter: () => void;
}

const PerformerFilter = ({
  countries,
  categories,
  setFilter,
  category,
  country,
  gender,
  clearFilter
}: IProps) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [selectedMenuKeys, setSelectedMenuKeys] = React.useState<string[]>([]);
  const [lastSelectedMenuKey, setLastSelectedMenuKey] = React.useState<string>();
  const onOpenChange = (keys: string[]) => {
    const menuKeys = keys.filter((key) => key !== lastSelectedMenuKey);
    setSelectedMenuKeys(menuKeys);
    setLastSelectedMenuKey(menuKeys[0]);
  };
  return (
    <>
      <Row align="middle" className="performer-filter" justify="space-between">
        <Col>
          <Button
            icon={<FilterOutlined />}
            type="primary"
            onClick={() => setVisible(true)}
            className="mr-8"
          >
            Filter
          </Button>
          <Space className="ant-space-wrap">
            <span style={{ fontWeight: 'bold' }}>Popular Filter:</span>
            <Button
              onClick={clearFilter}
              className={classnames(gender === '' ? 'active' : '')}
              type="dashed"
            >
              All
            </Button>
            <Button
              onClick={() => setFilter('gender', gender === 'female' ? '' : 'female')}
              className={classnames(gender === 'female' ? 'active' : '')}
              type="dashed"
            >
              Female
            </Button>
            <Button
              onClick={() => setFilter('gender', gender === 'transgender' ? '' : 'transgender')}
              className={classnames(gender === 'transgender' ? 'active' : '')}
              type="dashed"
            >
              Transgender
            </Button>
            <Button
              onClick={() => setFilter('gender', gender === 'male' ? '' : 'male')}
              className={classnames(gender === 'male' ? 'active' : '')}
              type="dashed"
            >
              Male
            </Button>
          </Space>
        </Col>
      </Row>
      <Drawer
        visible={visible}
        placement="left"
        onClose={() => setVisible(false)}
        title={(
          <Row justify="space-between" align="middle">
            <Col>Filter by:</Col>
            <Col>
              <Button
                type="link"
                onClick={() => clearFilter()}
                size="small"
                style={{ marginRight: 10 }}
              >
                Clear Filter
              </Button>
            </Col>
          </Row>
        )}
      >
        {/* Select multiple category */}
        <Menu
          mode="inline"
          style={{ borderRight: 0 }}
          multiple={false}
          onSelect={({ key }) => setFilter('category', key)}
          onDeselect={() => setFilter('category', '')}
          selectedKeys={[category]}
          openKeys={selectedMenuKeys}
          onOpenChange={onOpenChange}
        >
          <Menu.SubMenu title="Category" key="category">
            {categories.length > 0
              && categories.map((c) => (
                <Menu.Item key={c._id}>{c.name}</Menu.Item>
              ))}
          </Menu.SubMenu>
        </Menu>
        <Menu
          mode="inline"
          style={{ borderRight: 0 }}
          onSelect={({ key }) => setFilter('gender', key)}
          onDeselect={() => setFilter('gender', '')}
          selectedKeys={[gender]}
          openKeys={selectedMenuKeys}
          onOpenChange={onOpenChange}
        >
          <Menu.SubMenu title="Gender" key="gender">
            <Menu.Item key="female">Female</Menu.Item>
            <Menu.Item key="transgender">Transgender</Menu.Item>
            <Menu.Item key="male">Male</Menu.Item>
          </Menu.SubMenu>
        </Menu>
        {/* Select multiple country */}
        <Menu
          mode="inline"
          style={{ borderRight: 0 }}
          multiple={false}
          onSelect={({ key }) => setFilter('country', key)}
          onDeselect={() => setFilter('country', '')}
          selectedKeys={[country]}
          openKeys={selectedMenuKeys}
          onOpenChange={onOpenChange}
        >
          <Menu.SubMenu title="Country" key="country">
            {countries.length > 0
              && countries.map((c) => (
                <Menu.Item key={c.name}>{c.name}</Menu.Item>
              ))}
          </Menu.SubMenu>
        </Menu>
      </Drawer>
    </>
  );
};
PerformerFilter.defaultProps = {
  countries: [],
  categories: [],
  // offset: 0,
  // limit: 0,
  gender: '',
  category: '',
  country: ''
};

export default PerformerFilter;
