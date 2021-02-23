import { connect } from 'react-redux';
import App from '../../components/App/index.tsx';

import {
  toggleDetails,
  toggleLogin,
  toggleCreate,
  toggleLogged,
} from '../../actions/boolean';

import { logout, getUser } from '../../actions/user';

import { getPokemon, getTypes } from '../../actions/pokemon';

const mapStateToProps = (state) => ({
  isDetails: state.boolean.isDetails,
  isDrawer: state.boolean.isDrawer,
  isLogged: state.boolean.isLogged,
  isLogin: state.boolean.isLogin,
  pseudo: state.user.pseudo,
});

const mapDispatchToProps = (dispatch) => ({
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
