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
  isLogged: false,
  isCreate: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MEMORYSE_USER:
      return {
        ...state,
        logged: true,
        pseudo: action.pseudo,
        username: '',
        password: '',
      };
    case LOGOUT_USER:
      return {
        ...state,
        logged: false,
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
