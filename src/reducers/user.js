import {
  MEMORYSE_USER,
  LOGOUT_USER,
  CHANGE_LOGIN_INPUT,
  CHANGE_CREATE_INPUT,
} from '../actions/user';

const initialState = {
  username: '',
  pseudo: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MEMORYSE_USER:
      return {
        ...state,
        pseudo: action.pseudo,
        username: '',
        password: '',
      };
    case LOGOUT_USER:
      return {
        ...state,
        pseudo: '',
      };
    case CHANGE_LOGIN_INPUT:
      return {
        ...state,
        [action.key]: action.newValue,
      };
    case CHANGE_CREATE_INPUT:
      return {
        ...state,
        [action.key]: action.newValue,
      };
    default:
      return state;
  }
};

export default reducer;
