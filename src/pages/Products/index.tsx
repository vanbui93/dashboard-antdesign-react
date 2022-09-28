/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Avatar, Tag, Typography } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { getProduct } from '../../stores/actions/products';
import { RootState, useAppDispatch, useAppSelector } from '../../stores/configureStore';
import { ProductDataType } from '../../types';
import { EditingItem } from './EditingItem';
import { ItemList } from './ItemList';

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
  const data: ProductDataType[] = [];
  products &&
    Object.values(products)?.map<ProductDataType[]>((item: any, idx: number) => {
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
          <ItemList data={data} />
        </div>
      ) : (
        <EditingItem editObject={editObject} />
      )}
    </>
  );
};

export default Products;
