import { Card, Col, Radio, RadioChangeEvent, Row, Table } from 'antd';
import React from 'react';
import { columns, data } from './data_demo';

const Products: React.FC = props => {
  const onChange = (e: RadioChangeEvent): void => {
    console.log(`radio checked:${e.target.value}`);
  };
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
                    <Radio.Button value="b">ONLINE</Radio.Button>
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
