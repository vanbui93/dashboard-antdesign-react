import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import React from 'react';
const { Sider } = Layout;

type Props = {
  opensidebar: boolean;
  onToggleSidebar: (val: boolean) => void;
};

const Sidebar: React.FC<Props> = ({ opensidebar }) => {
  type MenuItem = Required<MenuProps>['items'][number];
  function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    return {
      key,
      icon,
      children,
      label
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [getItem('Tom', '3'), getItem('Bill', '4'), getItem('Alex', '5')]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />)
  ];

  return (
    <Sider trigger={null} collapsible collapsed={opensidebar}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
    </Sider>
  );
};

export default Sidebar;
