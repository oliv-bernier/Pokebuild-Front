import { connect } from 'react-redux';
import App from '../../components/App';

import {
  toggleDetails,
  toggleLogin,
  toggleCreate,
  toggleLogged,
  toggleFav,
  toggleUpdate,
} from '../../actions/boolean';

import {
  logout,
  getUser,
  fetchFav,
} from '../../actions/user';

import {
  getPokemon,
  getTypes,
} from '../../actions/pokemon';

const mapStateToProps = (state: any) => ({
  isDetails: state.boolean.isDetails,
  isDrawer: state.boolean.isDrawer,
  isLogged: state.boolean.isLogged,
  isLogin: state.boolean.isLogin,
  pseudo: state.user.pseudo,
  isFav: state.boolean.isFav,
  isUpdate: state.boolean.isUpdate,
  isSuggestion: state.boolean.isSuggestion,
  isDarkMode: state.boolean.isDarkMode,
});

const mapDispatchToProps = (dispatch: Function) => ({
  toggleDetails: () => {
    dispatch(toggleDetails());
  },
  getPokemon: () => {
    dispatch(getPokemon());
  },
  getTypes: () => {
    dispatch(getTypes());
  },
  toggleLogin: () => {
    dispatch(toggleLogin());
  },
  toggleCreate: () => {
    dispatch(toggleCreate());
  },
  toggleLogged: () => {
    dispatch(toggleLogged());
  },
  logout: () => {
    dispatch(logout());
  },
  getUser: () => {
    dispatch(getUser());
  },
  toggleFav: () => {
    dispatch(toggleFav());
  },
  fetchFav: () => {
    dispatch(fetchFav());
  },
  toggleUpdate: () => {
    dispatch(toggleUpdate());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
