/* eslint-disable no-console */
/* eslint-disable default-case */
import axios from 'axios';
import {
  LOGIN_USER,
  LOGOUT_USER,
  CREATE_USER,
  memorizeUser,
} from '../actions/user';

const ajaxUser = (store) => (next) => (action) => {
  if (localStorage.getItem('user') !== null) {
    const user = localStorage.getItem('user');
    axios.defaults.headers.common.Authorization = `bearer ${user.token}`;
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
          store.dispatch(memorizeUser(user.username));
          axios.defaults.headers.common.Authorization = `bearer ${user.token}`;
          localStorage.setItem('user', JSON.stringify(user));
        })
        .catch((error) => {
          console.error(error);
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
        });
    }
  }
  next(action);
};

export default ajaxUser;
