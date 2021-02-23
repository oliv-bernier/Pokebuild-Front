import { connect } from 'react-redux';
import App from '../../components/App/index.tsx';

import { toggleDetails, toggleLogin } from '../../actions/boolean';
import { getPokemon, getTypes } from '../../actions/pokemon';

const mapStateToProps = (state) => ({
  isDetails: state.boolean.isDetails,
  isDrawer: state.boolean.isDrawer,
  isLogged: state.boolean.isLogged,
  isLogin: state.boolean.isLogin,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
