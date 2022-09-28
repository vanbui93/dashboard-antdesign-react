import { FileOutlined, LayoutOutlined, TableOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
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
    getItem(<Link to="/dashboard">Dashboard</Link>, '1', <LayoutOutlined />),
    getItem(<Link to="/products">Products</Link>, '2', <TableOutlined />),
    getItem(<Link to="/users">User</Link>, 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5')
    ]),
    getItem(<Link to="/team">Team</Link>, 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem(<Link to="/file">Files</Link>, '9', <FileOutlined />)
  ];

  return (
    <Sider trigger={null} collapsible collapsed={opensidebar}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
    </Sider>
  );
};

export default Sidebar;
