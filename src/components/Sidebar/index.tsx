import { Drawer } from 'antd';
import React, { useState } from 'react';

export default function Sidebar() {
  const [open, setOpen] = useState<boolean>(true);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
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
}
