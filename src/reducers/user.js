import {
  MEMORIZE_USER,
  LOGOUT_USER,
  CHANGE_LOGIN_INPUT,
  CHANGE_CREATE_INPUT,
  GET_USER,
  ADD_ERROR_LOGIN,
  ADD_ERROR_CREATE,
} from '../actions/user';

import { TOGGLE_LOGIN } from '../actions/boolean';

const initialState = {
  username: '',
  pseudo: '',
  email: '',
  password: '',
  passwordConfirm: '',
  token: '',
  error: '',
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
    case TOGGLE_LOGIN:
      return {
        ...state,
        username: '',
        password: '',
        email: '',
        passwordConfirm: '',
        error: '',
      };
    case ADD_ERROR_LOGIN: {
      let text;
      if (state.username === '' && state.password === '') {
        text = 'Le nom de dresseur et le mot de passe ne sont pas saisis';
      }
      else if (state.username === '') {
        text = 'Le nom de dresseur n\'est pas saisi';
      }
      else if (state.password === '') {
        text = 'Le mot de passe n\'est pas saisi';
      }
      else {
        text = 'Nom de dresseur ou mot de passe incorrect';
      }
      return {
        ...state,
        error: text,
      };
    }
    case ADD_ERROR_CREATE:
      return {
        ...state,
        error: 'Au moins un champ est manquant, merci de bien tous les remplir',
      };
    default:
      return state;
  }
};

export default reducer;
