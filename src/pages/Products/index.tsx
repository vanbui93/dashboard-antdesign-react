/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeleteOutlined, EditOutlined, SmileOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Radio, RadioChangeEvent, Row, Table, Tag, Typography } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { getProduct } from '../../stores/actions/products';
import { RootState, useAppDispatch, useAppSelector } from '../../stores/configureStore';
import { columns } from './table_title';
import {
  FooterToolbar,
  PageContainer,
  ProForm,
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormUploadButton,
  ProLayout
} from '@ant-design/pro-components';

const { Title } = Typography;

const Products: React.FC = () => {
  const idRef = useRef<number>();
  const products = useAppSelector((state: RootState) => state.products.data);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [imgsSrc, setImgsSrc] = useState([]);
  const [editObject, setEditObject] = useState({
    name: '',
    images: [],
    price: '',
    compare_price: '',
    collection: '',
    newBox: '',
    fullbox: '',
    colors: [],
    skus: [],
    videos: [],
    warantys: [],
    promotions: [],
    update_date: '',
    isDisplay: '1'
  });
  interface DataType {
    key?: number;
    name?: JSX.Element;
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

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  //Lấy images sản phẩm đại diện
  const getImgThumb = (imgThumb: string[]) => {
    const img: string[] = [];
    Object.values(imgThumb)?.map(item => {
      if (item !== null) {
        img.push(item);
      }
    });
    return <img src={img[0]} alt="/" loading="lazy" />;
  };

  //Đổ products vào data trong table
  const data: DataType[] = [];
  products &&
    Object.values(products)?.map<DataType[]>((item: any, idx: number) => {
      data.push({
        key: idx,
        name: (
          <Avatar.Group>
            <Avatar className="shape-avatar" shape="square" size={40} src={getImgThumb(item?.images)}></Avatar>
            <div className="avatar-info">
              <Title level={5}>{item.name}</Title>
            </div>
          </Avatar.Group>
        ),
        collection: item.collection,
        fullbox: (
          <>{item.fullbox === 1 ? <Tag color="geekblue">{'New fullbox'}</Tag> : <Tag color="volcano">{'Used'}</Tag>}</>
        ),
        price: item.price,
        new: item.newBox,
        create_date: item.create_date,
        update_date: item.update_date,
        status: (
          <>
            <>{item.isDisplay === 1 ? <Tag color="green">{'Show'}</Tag> : <Tag color="yellow">{'Hide'}</Tag>}</>
          </>
        ),
        edit: (
          <>
            <EditOutlined />
            <a onClick={() => handleEditItem(item)}> Edit</a>
          </>
        ),
        delete: (
          <>
            <DeleteOutlined />
            <a onClick={() => handleDelete(item.id)}> Delete</a>
          </>
        )
      });
      return data;
    });

  console.log(products);
  console.log(data);

  //Change SHOW isDisplay
  const changeFilterShow = (e: RadioChangeEvent): void => {
    console.log(`radio checked:${e.target.value}`);
  };

  //Edit item sản phẩm
  const handleEditItem = (item: any) => {
    idRef.current = item.id;
    setIsEdit(true);
    setEditObject(item);
    setImgsSrc(item.images);
  };

  console.log(isEdit);
  console.log(editObject);

  //Xóa Item sản phẩm
  const handleDelete = (id: number) => {
    // handleDialog('Bán có chắc chắn muốn xóa không ?', true);
    idRef.current = id;
  };

  return (
    <>
      {!isEdit ? (
        <div className="tabled">
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
      ) : (
        <ProLayout
          fixSiderbar
          fixedHeader
          breakpoint={false}
          defaultCollapsed
          pageTitleRender={false}
          menuDataRender={() => [
            {
              path: '/products',
              icon: <SmileOutlined />,
              name: 'Product List',
              children: [
                {
                  path: 'add',
                  name: 'Add Product'
                }
              ]
            }
          ]}
          layout="mix"
          location={{
            pathname: '/products/add'
          }}>
          <PageContainer title="Chỉnh sửa sản phẩm">
            <Card>
              <ProForm
                submitter={{
                  render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>
                }}
                onFinish={async values => console.log(values)}>
                <ProForm.Group>
                  <ProFormText name="name" label="Tên sản phẩm" placeholder="Tên sản phẩm" />
                  <ProFormText width="md" name="company" label="我方公司名称" placeholder="请输入名称" />
                </ProForm.Group>
                <ProForm.Group>
                  <ProFormText name={['contract', 'name']} label="合同名称" placeholder="请输入名称" />
                  <ProFormDateRangePicker name={['contract', 'createTime']} label="合同生效时间" />
                </ProForm.Group>
                <ProForm.Group>
                  <ProFormSelect
                    options={[
                      {
                        value: 'chapter',
                        label: '盖章后生效'
                      }
                    ]}
                    width="xs"
                    name="chapter"
                    label="合同约定生效方式"
                  />
                  <ProFormSelect
                    width="xs"
                    options={[
                      {
                        value: 'time',
                        label: '履行完终止'
                      }
                    ]}
                    name="unusedMode"
                    label="合同约定失效效方式"
                  />
                </ProForm.Group>
                <ProFormText width="sm" name="id" label="主合同编号" />
                <ProFormText name="project" disabled label="项目名称" initialValue="xxxx项目" />
                <ProFormText width="xs" name="mangerName" disabled label="商务经理" initialValue="启途" />
                <ProForm.Group>
                  <ProFormSelect
                    initialValue="money"
                    options={[
                      {
                        value: 'money',
                        label: '确认金额'
                      }
                    ]}
                    width="xs"
                    name="useMode"
                    label="金额类型"
                  />
                  <ProFormSelect
                    options={[
                      {
                        value: '6',
                        label: '6%'
                      },
                      {
                        value: '12',
                        label: '12%'
                      }
                    ]}
                    initialValue="6"
                    width="xs"
                    name="taxRate"
                    label="税率"
                  />
                  <ProFormRadio.Group
                    label="发票类型"
                    name="invoiceType"
                    initialValue="发票"
                    options={['发票', '普票', '无票']}
                  />
                </ProForm.Group>
                <ProFormUploadButton
                  extra="File type：.jpg .zip .doc .wps"
                  label="Thêm tệp"
                  name="file"
                  title="Upload file"
                />
                <ProFormDigit width="xs" name="num" label="合同份数" initialValue={5} />
                <ProFormTextArea width="xl" label="合同备注说明" name="remark" />
              </ProForm>
            </Card>
          </PageContainer>
        </ProLayout>
      )}
    </>
  );
};

export default Products;
