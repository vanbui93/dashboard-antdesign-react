export interface IRoute {
  path: string;
  main: JSX.Element;
}

export interface ProductDataType {
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

export interface ProductEditingType {
  name: string;
  images: never[];
  price: string;
  compare_price: string;
  collection: string;
  newBox: string;
  fullbox: string;
  colors: never[];
  skus: never[];
  videos: never[];
  warantys: never[];
  promotions: never[];
  update_date: string;
  isDisplay: string;
  otherProp?: any;
}
