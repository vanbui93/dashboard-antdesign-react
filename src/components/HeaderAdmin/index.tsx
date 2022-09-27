import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react';
const { Header } = Layout;

type Props = {
  opensidebar: boolean;
  onToggleSidebar: (val: boolean) => void;
};

const HeaderAdmin: React.FC<Props> = ({ opensidebar, onToggleSidebar }) => {
  const onClose = () => {
    onToggleSidebar(!opensidebar);
  };
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(opensidebar ? MenuFoldOutlined : MenuUnfoldOutlined, {
        className: 'trigger',
        onClick: onClose
      })}
    </Header>
  );
};

export default HeaderAdmin;
