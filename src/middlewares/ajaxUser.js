/* eslint-disable no-console */
/* eslint-disable default-case */
import axios from 'axios';
import {
  LOGIN_USER,
  LOGOUT_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  memorizeUser,
  addError,
  clearLog,
  logout,
} from '../actions/user';

import {
  DELETE_TEAM,
  FETCH_FAV,
  memorizeTeams,
  SAVE_TEAM,
} from '../actions/favorites';

import {
  toggleLogged,
  toggleUpdate,
  toggleLogin,
  toggleDelete,
} from '../actions/boolean';

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
          setTimeout(() => {
            store.dispatch(clearLog());
          }, 100);
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(addError('Nom de dresseur ou mot de passe incorrect'));
          setTimeout(() => {
            store.dispatch(clearLog());
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
        .then(() => {
          store.dispatch(toggleLogin());
          setTimeout(() => {
            store.dispatch(clearLog());
          }, 100);
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(addError('Les informations saisies sont incorrect. Merci de réessayer'));
          setTimeout(() => {
            store.dispatch(clearLog());
          }, 500);
        });
    }
      break;
    case UPDATE_USER: {
      const {
        pseudo: username,
        password,
        passwordConfirm,
        passwordUpdate,
        email,
      } = store.getState().user;
      axios.post('admin/user/edit', {
        username,
        password,
        newPassword: passwordUpdate,
        newPasswordConfirm: passwordConfirm,
        email,
      })
        .then(() => {
          store.dispatch(toggleUpdate());
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(addError('Les informations saisies sont incorrect. Merci de réessayer'));
        });
    }
      break;
    case DELETE_USER:
      axios.post('admin/user/delete', {
        username: store.getState().user.pseudo,
      })
        .then(() => {
          store.dispatch(toggleDelete());
          setTimeout(() => {
            store.dispatch(toggleUpdate());
            store.dispatch(logout());
            store.dispatch(toggleLogged());
          }, 100);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    case FETCH_FAV: {
      const {
        pseudo,
      } = store.getState().user;
      axios.post('admin/user/read', {
        username: pseudo,
      })
        .then((response) => {
          store.dispatch(memorizeTeams(response.data.apiTeams));
        })
        .catch((error) => {
          console.error(error);
        });
    }
      break;
    case SAVE_TEAM: {
      const {
        name,
      } = store.getState().favorites;
      const {
        pseudo,
      } = store.getState().user;
      const {
        pokemonSelectedIds,
      } = store.getState().pokemon;
      axios.post('admin/team/creation', {
        name,
        username: pseudo,
        pokemon: pokemonSelectedIds,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
      break;
    case DELETE_TEAM: {
      const {
        id,
      } = store.getState().favorites;
      axios.post(`admin/team/delete/${id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      const {
        pseudo,
      } = store.getState().user;
      axios.post('admin/user/read', {
        username: pseudo,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(memorizeTeams(response.data.apiTeams));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  next(action);
};

export default ajaxUser;
