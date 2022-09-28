import { Card, Col, Radio, RadioChangeEvent, Row, Table } from 'antd';
import React from 'react';
import { ProductDataType } from '../../types';
import { columns } from './table_title';

type Props = {
  data: ProductDataType[];
};

export const ItemList: React.FC<Props> = props => {
  const { data } = props;

  //Change SHOW isDisplay
  const changeFilterShow = (e: RadioChangeEvent): void => {
    console.log(`radio checked:${e.target.value}`);
  };

  return (
    <div>
      <Row gutter={[24, 0]}>
        <Col xs="24" xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="Product List"
            extra={
              <>
                <Radio.Group onChange={changeFilterShow} defaultValue="a">
                  <Radio.Button value="all">All</Radio.Button>
                  <Radio.Button value="1">SHOW</Radio.Button>
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
  );
};
