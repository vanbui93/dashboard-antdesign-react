import { Avatar, Button, Typography } from 'antd';
const { Title } = Typography;

// table code start
export const columns = [
  {
    title: 'Product name',
    dataIndex: 'name',
    key: 'name',
    width: '25%'
  },
  {
    title: 'Collection',
    dataIndex: 'collection',
    key: 'collection'
  },
  {
    title: 'FullBox',
    dataIndex: 'fullBox',
    key: 'fullBox'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: 'New',
    dataIndex: 'new',
    key: 'new'
  },
  {
    title: 'Create Date',
    key: 'create_date',
    dataIndex: 'create_date'
  },
  {
    title: 'Update Date',
    key: 'update_date',
    dataIndex: 'update_date'
  },
  {
    title: 'STATUS',
    key: 'status',
    dataIndex: 'status'
  },
  {
    title: 'Edit',
    key: 'edit',
    dataIndex: 'edit'
  },
  {
    title: 'Delete',
    key: 'delete',
    dataIndex: 'delete'
  }
];

export const data = [
  {
    key: '1',
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" shape="square" size={40}></Avatar>
          <div className="avatar-info">
            <Title level={5}>Michael John</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    collection: 'Phụ kiện',
    fullBox: 'Đã sử dụng	',
    price: 32000,
    new: '100',
    create_date: '23/04/18',
    update_date: '23/04/18',
    status: (
      <>
        <Button type="primary" className="tag-primary">
          SHOW
        </Button>
      </>
    ),
    edit: (
      <>
        <a href="#pablo">Edit</a>
      </>
    ),
    delete: (
      <>
        <a href="#pablo">Delete</a>
      </>
    )
  }
];
