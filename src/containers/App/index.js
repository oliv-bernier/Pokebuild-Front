import { connect } from 'react-redux';
import App from '../../components/App/index.tsx';

import { toggleDetails } from '../../actions/boolean';
import { getPokemon, getTypes } from '../../actions/pokemon';

const mapStateToProps = (state) => ({
  isDetails: state.boolean.isDetails,
  isDrawer: state.boolean.isDrawer,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
