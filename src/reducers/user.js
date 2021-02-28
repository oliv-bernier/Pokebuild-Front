import {
  MEMORIZE_USER,
  LOGOUT_USER,
  CHANGE_INPUT,
  GET_USER,
  ADD_ERROR,
  ADD_ADVERTISE,
  CLEAR_LOG,
} from '../actions/user';

import {
  TOGGLE_LOGIN,
  TOGGLE_UPDATE,
  TOGGLE_DELETE,
  TOGGLE_CREATE,
} from '../actions/boolean';

const initialState = {
  username: '',
  pseudo: '',
  email: '',
  password: '',
  passwordUpdate: '',
  passwordConfirm: '',
  token: '',
  error: '',
  advertise: 'testetettetetetetteztetzetztetzetze',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MEMORIZE_USER:
      return {
        ...state,
        pseudo: action.pseudo,
        token: action.token,
        username: '',
        password: '',
        error: '',
      };
    case CLEAR_LOG:
      return {
        ...state,
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        passwordUpdate: '',
      };
    case LOGOUT_USER:
      return {
        ...state,
        pseudo: '',
      };
    case CHANGE_INPUT:
      return {
        ...state,
        [action.key]: action.newValue,
      };
    case GET_USER: {
      const user = JSON.parse(localStorage.getItem('user'));
      return {
        ...state,
        pseudo: user.username,
        token: user.token,
      };
    }
    case TOGGLE_LOGIN:
      return {
        ...state,
        username: '',
        password: '',
        email: '',
        passwordUpdate: '',
        passwordConfirm: '',
        error: '',
      };
    case TOGGLE_UPDATE:
      return {
        ...state,
        username: '',
        password: '',
        email: '',
        passwordUpdate: '',
        passwordConfirm: '',
        error: '',
        advertise: '',
      };
    case TOGGLE_DELETE:
      return {
        ...state,
        password: '',
        error: '',
      };
    case TOGGLE_CREATE:
      return {
        ...state,
        error: '',
      };
    case ADD_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case ADD_ADVERTISE:
      return {
        ...state,
        advertise: action.advertise,
      };
    default:
      return state;
  }
};

export default reducer;
