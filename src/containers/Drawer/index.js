import { connect } from 'react-redux';
import Drawer from '../../components/Drawer/index.tsx';

import { toggleDrawer, toggleDetails } from '../../actions/boolean';

const mapStateToProps = (state) => ({
  pokemon: state.pokemon.pokemonList,
  // isDetails: state.boolean.isDetails,
  isDrawer: state.boolean.isDrawer,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer: () => {
    dispatch(toggleDrawer());
  },
  toggleDetails: () => {
    dispatch(toggleDetails());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
