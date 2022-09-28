import { SmileOutlined } from '@ant-design/icons';
import { ProForm, ProFormDigit, ProFormText, ProFormTextArea, ProFormUploadButton } from '@ant-design/pro-components';
import ProLayout, { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import { ProductEditingType } from '../../types';

type Props = {
  editObject: ProductEditingType;
};
export const EditingItem: React.FC<Props> = ({ editObject }: Props) => {
  console.log(editObject);

  return (
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
            <ProFormText name="name" label="Tên sản phẩm" placeholder="Tên sản phẩm" initialValue={editObject.name} />
            <ProFormUploadButton
              extra="File type：.jpg .zip .doc .wps"
              label="Thêm tệp"
              name="file"
              title="Upload file"
            />
          </ProForm>
        </Card>
      </PageContainer>
    </ProLayout>
  );
};
