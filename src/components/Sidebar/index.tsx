import { LayoutOutlined, TableOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

type Props = {
  opensidebar: boolean;
  onToggleSidebar: (val: boolean) => void;
};

const Sidebar: React.FC<Props> = ({ opensidebar }) => {
  return (
    <Sider trigger={null} collapsible collapsed={opensidebar}>
      <div className="logo" />
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item className="menu-item-header" key="1">
          <NavLink to="/dashboard">
            <LayoutOutlined /> Dashboard
          </NavLink>
        </Menu.Item>
        <Menu.Item className="menu-item-header" key="2">
          <NavLink to="/products">
            <TableOutlined /> Products
          </NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
