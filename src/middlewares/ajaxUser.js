/* eslint-disable no-console */
/* eslint-disable default-case */
import axios from 'axios';
import {
  LOGIN_USER,
  LOGOUT_USER,
  CREATE_USER,
  memorizeUser,
  addError,
  FETCH_FAV,
  clearPassword,
} from '../actions/user';

import { toggleLogged } from '../actions/boolean';

const ajaxUser = (store) => (next) => (action) => {
  if (localStorage.getItem('user') !== null) {
    const user = JSON.parse(localStorage.getItem('user'));
    axios.defaults.headers.common.Authorization = `Bearer ${user.token}`;
  }
  axios.default.baseURL = 'http://ec2-3-83-51-192.compute-1.amazonaws.com/api/v1/';
  switch (action.type) {
    case LOGIN_USER: {
      const { username, password } = store.getState().user;
      axios.post('user/login', {
        username,
        password,
      })
        .then((response) => {
          const user = response.data;
          const { username: name, token } = user;
          store.dispatch(toggleLogged());
          store.dispatch(memorizeUser(name, token));
          axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          localStorage.setItem('user', JSON.stringify(user));
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(addError('Nom de dresseur ou mot de passe incorrect'));
          setTimeout(() => {
            store.dispatch(clearPassword());
          }, 500);
        });
    }
      break;
    case LOGOUT_USER:
      delete axios.defaults.headers.common.Authorization;
      localStorage.removeItem('user');
      break;
    case CREATE_USER: {
      const {
        username,
        email,
        password,
        passwordConfirm,
      } = store.getState().user;
      axios.post('user/create', {
        username,
        email,
        password,
        passwordConfirm,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(addError('Les informations saisies sont incorrect. Merci de réessayer'));
          setTimeout(() => {
            store.dispatch(clearPassword());
          }, 500);
        });
    }
      break;
    case FETCH_FAV: {
      const {
        pseudo,
      } = store.getState().user;
      axios.post('admin/user/read', {
        username: pseudo,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  next(action);
};

export default ajaxUser;
