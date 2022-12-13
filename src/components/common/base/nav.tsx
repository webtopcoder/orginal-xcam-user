import React from 'react';
import { MenuProps, MenuItemProps } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import dynamic from 'next/dynamic';

const Menu = dynamic(() => import('antd/lib/menu'), { ssr: false });

export const NavItem = ({ ...props }: MenuItemProps) => <MenuItem {...props} />;

export const NavBar = ({
  children,
  ...props
}: React.PropsWithChildren<MenuProps>) => (
  <Menu
    prefixCls="ant-menu"
    mode="horizontal"
    overflowedIndicator={false}
    {...props}
  >
    {children}
  </Menu>
);
