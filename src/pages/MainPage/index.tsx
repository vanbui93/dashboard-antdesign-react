import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Radio, Space } from 'antd';
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const MainPage: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <>
      <Space>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
    </>
  );
};

export default MainPage;
