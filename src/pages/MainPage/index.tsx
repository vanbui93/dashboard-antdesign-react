import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Radio, Space } from 'antd';
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const MainPage: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement="left"
        onClose={onClose}
        open={open}
        className="wrap-drawer"
        closable={false}>
        <Sidebar />
      </Drawer>
    </>
  );
};

export default MainPage;
