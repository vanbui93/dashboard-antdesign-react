import { AnyAction } from 'redux';
import * as types from '../constants/ui';

// Define a type for the slice state
interface OpenSidebarState {
  opensidebar: boolean;
}

// Define the initial state using that type
const initialState: OpenSidebarState = {
  opensidebar: true
};

const uiReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.SHOW_SIDEBAR: {
      return {
        ...state,
        opensidebar: true
      };
    }
    case types.HIDE_SIDEBAR: {
      return {
        ...state,
        opensidebar: false
      };
    }
    default:
      return state;
  }
};

export default uiReducer;
