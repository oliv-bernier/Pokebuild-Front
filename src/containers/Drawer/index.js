import { connect } from 'react-redux';
import Drawer from '../../components/Drawer/index.tsx';

import { toggleDrawer, toggleDetails } from '../../actions/boolean';

const mapStateToProps = (state) => ({
  pokemon: state.pokemon.pokemonList,
  isDrawer: state.boolean.isDrawer,
  filterTypes: state.pokemon.filterTypes,
  filterInput: state.pokemon.searchInput,
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
