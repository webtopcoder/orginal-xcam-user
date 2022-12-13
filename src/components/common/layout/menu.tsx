/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import Router, { withRouter, NextRouter } from 'next/router';

interface IProps {
  theme?: string;
  isMobile?: boolean;
  menus?: any;
  collapsed?: boolean;
  router: NextRouter;
  totalNotReadMessage?: number;
  onClick?: () => void;
}

class SiderMenu extends PureComponent<IProps> {
  state = {
    selectedKeys: ['dashboard'],
    openKeys: []
  };

  componentDidMount() {
    // Router.events.on('routeChangeStart', this.routerChange.bind(this));
    const { menus } = this.props;
    const selectedKeys = process.browser
      ? this.getSelectedKeys(menus)
      : [];
    this.setSelectedKeys(selectedKeys);
  }

  componentDidUpdate(prevProps: IProps) {
    const { menus, router } = this.props;
    if (router.pathname !== prevProps.router.pathname) {
      const selectedKeys = process.browser
        ? this.getSelectedKeys(menus)
        : [];
      this.setSelectedKeys(selectedKeys);
    }
  }

  onOpenChange = (openKeys) => {
    const { menus } = this.props;
    const rootSubmenuKeys = menus
      .filter((_) => !_.menuParentId)
      .map((_) => _.id);

    const latestOpenKey = openKeys.find(
      (key) => openKeys.indexOf(key) === -1
    );

    let newOpenKeys = openKeys;
    if (rootSubmenuKeys.indexOf(latestOpenKey) !== -1) {
      newOpenKeys = latestOpenKey ? [latestOpenKey] : [];
    }

    this.setState({
      openKeys: newOpenKeys
    });
  };

  onSelect({ key }) {
    const { menus } = this.props;
    const flatTree = this.flatten(menus);
    const selectedKeys = flatTree.filter((m) => m.id === key).map((m) => m.id);
    this.setSelectedKeys(selectedKeys);
  }

  getSelectedKeys(menus: any) {
    const pathname = process.browser ? Router.pathname : '';
    const flatTree = this.flatten(menus);
    return (
      flatTree
        // .filter((m) => pathname.includes(m.as || m.route))
        .filter((m) => (pathname === m.route || pathname === m.as))
        .map((m) => m.id)
    );
  }

  setSelectedKeys(selectedKeys) {
    this.setState({ selectedKeys });
  }

  generateMenus = (data) => {
    const { totalNotReadMessage } = this.props;
    return data.map((item, index) => {
      if (item.children) {
        return (
          <Menu.SubMenu
            icon={item.icon}
            key={`sub-${index}`}
            title={(
              <>
                <span>{item.name}</span>
              </>
            )}
          >
            {this.generateMenus(item.children)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={item.id} icon={item.icon}>
          <Link href={item.route} as={item.as || item.route}>
            <a>
              {item.name}
              {' '}
              {item.id === 'messages' && `(${totalNotReadMessage})`}
            </a>
          </Link>
        </Menu.Item>
      );
    });
  };

  flatten(menus, flattenMenus = []) {
    menus.forEach((m) => {
      if (m.children) {
        this.flatten(m.children, flattenMenus);
      }
      const tmp = { ...m };
      delete tmp.children;
      flattenMenus.push(tmp);
    });

    return flattenMenus;
  }

  render() {
    const {
      theme, menus, collapsed, onClick
    } = this.props;
    const { selectedKeys, openKeys } = this.state;
    const menuProps = collapsed
      ? {}
      : {
        openKeys
      };

    return (
      <Menu
        key="profile-menu"
        mode="inline"
        theme={theme as any}
        selectedKeys={selectedKeys}
        onOpenChange={this.onOpenChange.bind(this)}
        onSelect={this.onSelect.bind(this)}
        onClick={onClick}
        // onClick={
        //   isMobile
        //     ? () => {
        //         onCollapseChange(true);
        //       }
        //     : undefined
        // }
        {...menuProps}
      >
        {this.generateMenus(menus)}
      </Menu>
    );
  }
}

export default withRouter(SiderMenu);
