import { Drawer } from 'antd';
import React from 'react';

type Props = {
  opensidebar: boolean;
  onToggleSidebar: (val: boolean) => void;
};

const Sidebar: React.FC<Props> = ({ opensidebar, onToggleSidebar }) => {
  const onClose = () => {
    onToggleSidebar(false);
  };
  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement="left"
        onClose={onClose}
        open={opensidebar}
        className="wrap-drawer"
        closable={true}></Drawer>
    </>
  );
};

export default Sidebar;
