import { combineReducers } from 'redux';
import uiReducer from './reducers/ui';

const rootReducer = combineReducers({
  ui: uiReducer
});

export default rootReducer;
