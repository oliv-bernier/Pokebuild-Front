import {
  MEMORIZE_USER,
  LOGOUT_USER,
  CHANGE_LOGIN_INPUT,
  CHANGE_CREATE_INPUT,
  GET_USER,
} from '../actions/user';

const initialState = {
  username: '',
  pseudo: '',
  email: '',
  password: '',
  passwordConfirm: '',
  token: '',
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
    case GET_USER: {
      const user = JSON.parse(localStorage.getItem('user'));
      return {
        ...state,
        pseudo: user.username,
        token: user.token,
      };
    }
    default:
      return state;
  }
};

export default reducer;
