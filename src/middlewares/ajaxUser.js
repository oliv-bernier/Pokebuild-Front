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
  addAdvertise,
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
  toggleAdvertise,
  toggleFinalDelete,
} from '../actions/boolean';

const ajaxUser = (store) => (next) => (action) => {
  if (localStorage.getItem('user') !== null) {
    const user = JSON.parse(localStorage.getItem('user'));
    axios.defaults.headers.common.Authorization = `Bearer ${user.token}`;
  }
  axios.default.baseURL = 'http://ec2-54-209-63-59.compute-1.amazonaws.com/api/v1/';
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
          store.dispatch(addAdvertise('Ton compte a été créé ! \n Tu vas recevoir un mail d\'ici quelques minutes dans lequel tu trouveras un lien pour activer ton compte.'));
          setTimeout(() => {
            store.dispatch(clearLog());
            store.dispatch(toggleAdvertise());
          }, 100);
          setTimeout(() => {
            if (store.getState().boolean.isAdvertise) {
              store.dispatch(toggleAdvertise());
            }
          }, 10000);
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
    case DELETE_USER: {
      const { pseudo: username, password } = store.getState().user;
      axios.post('admin/user/delete', {
        username,
        password,
      })
        .then(() => {
          store.dispatch(toggleFinalDelete());
          store.dispatch(addAdvertise('Ton compte est bien supprimé ! \n N\'hésites pas à revenir si on te manque ;)'));
          setTimeout(() => {
            store.dispatch(clearLog());
            store.dispatch(logout());
            store.dispatch(toggleAdvertise());
          }, 100);
          setTimeout(() => {
            if (store.getState().boolean.isAdvertise) {
              store.dispatch(toggleAdvertise());
            }
          }, 10000);
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(addError('Le mot de passe saisi est invalide'));
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
