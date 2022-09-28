import { combineReducers } from 'redux';
import productReducer from './reducers/products';
import uiReducer from './reducers/ui';

const rootReducer = combineReducers({
  ui: uiReducer,
  products: productReducer
});

export default rootReducer;
