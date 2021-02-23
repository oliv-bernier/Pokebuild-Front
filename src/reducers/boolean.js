import {
  TOGGLE_DETAILS,
  TOGGLE_DRAWER,
  CLOSE_DRAWER,
  TOGGLE_LOGIN,
} from '../actions/boolean';

const initialState = {
  isDrawer: false,
  isDetails: false,
  isLogged: false,
  isLogin: false,
  isCreate: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_DETAILS:
      return {
        ...state,
        isDetails: !state.isDetails,
      };
    case TOGGLE_DRAWER:
      return {
        ...state,
        isDrawer: !state.isDrawer,
      };
    case CLOSE_DRAWER:
      return {
        ...state,
        isDrawer: false,
      };
    case TOGGLE_LOGIN:
      return {
        ...state,
        isLogin: !state.isLogin,
      };
    default:
      return state;
  }
};

export default reducer;
