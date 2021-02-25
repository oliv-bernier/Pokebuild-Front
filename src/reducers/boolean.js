import {
  TOGGLE_DETAILS,
  TOGGLE_DRAWER,
  CLOSE_DRAWER,
  TOGGLE_LOGIN,
  TOGGLE_CREATE,
  TOGGLE_LOGGED,
  TOGGLE_FAV,
  TOGGLE_INPUT_FAV,
  TOGGLE_UPDATE,
} from '../actions/boolean';

import { TOGGLE_CONFIRM_DELETE } from '../actions/favorites';

import { GET_USER } from '../actions/user';

const initialState = {
  isDrawer: false,
  isDetails: false,
  isLogged: false,
  isLogin: false,
  isCreate: false,
  isFav: false,
  isInputFav: false,
  isConfirmDelete: false,
  isUpdate: false,
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
        isCreate: false,
      };
    case TOGGLE_CREATE:
      return {
        ...state,
        isLogin: !state.isLogin,
        isCreate: true,
      };
    case TOGGLE_LOGGED:
      return {
        ...state,
        isLogged: !state.isLogged,
      };
    case GET_USER:
      return {
        ...state,
        isLogged: true,
      };
    case TOGGLE_FAV:
      return {
        ...state,
        isFav: !state.isFav,
      };
    case TOGGLE_INPUT_FAV:
      return {
        ...state,
        isInputFav: !state.isInputFav,
      };
    case TOGGLE_CONFIRM_DELETE:
      return {
        ...state,
        isConfirmDelete: !state.isConfirmDelete,
      };
    case TOGGLE_UPDATE:
      return {
        ...state,
        isUpdate: !state.isUpdate,
      };
    default:
      return state;
  }
};

export default reducer;
