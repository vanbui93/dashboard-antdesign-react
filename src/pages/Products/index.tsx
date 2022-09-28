import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Card, Col, Radio, RadioChangeEvent, Row, Table, Tag } from 'antd';
import React, { useEffect } from 'react';
import { getProduct } from '../../stores/actions/products';
import { RootState, useAppDispatch, useAppSelector } from '../../stores/configureStore';
import { columns } from './table_title';

const Products: React.FC = props => {
  const products = useAppSelector((state: RootState) => state.products.data);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const onChange = (e: RadioChangeEvent): void => {
    console.log(`radio checked:${e.target.value}`);
  };
  interface DataType {
    key?: number;
    name?: string;
    collection?: string;
    fullbox?: JSX.Element;
    price?: number;
    new?: number;
    create_date?: Date;
    update_date?: Date;
    status?: JSX.Element;
    edit?: JSX.Element;
    delete?: JSX.Element;
  }
  const data: DataType[] = [];
  products &&
    Object.values(products)?.map((item: any, idx: number) => {
      data.push({
        key: idx,
        name: item.name,
        collection: item.collection,
        fullbox: <>{item.fullbox === 1 ? <Tag color="#00f">{'New fullbox'}</Tag> : <Tag color="#f00">{'Used'}</Tag>}</>,
        price: item.price,
        new: item.new,
        create_date: item.create_date,
        update_date: item.update_date,
        status: (
          <>
            <Button type="primary" className="tag-primary">
              {item.isDisplay === 1 ? 'SHOW' : 'HIDE'}
            </Button>
          </>
        ),
        edit: (
          <>
            <EditOutlined />
            <a href="#pablo"> Edit</a>
          </>
        ),
        delete: (
          <>
            <DeleteOutlined />
            <a href="#pablo"> Delete</a>
          </>
        )
      });
      return data;
    });

  console.log(data);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Product List"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="a">All</Radio.Button>
                    <Radio.Button value="b">SHOW</Radio.Button>
                  </Radio.Group>
                </>
              }>
              <div className="table-responsive">
                <Table columns={columns} dataSource={data} pagination={false} className="ant-border-space" />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Products;
