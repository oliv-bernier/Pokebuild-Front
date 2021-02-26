import { connect } from 'react-redux';
import Drawer from '../../components/Drawer';

import { toggleDrawer, toggleDetails } from '../../actions/boolean';

const mapStateToProps = (state: any) => ({
  pokemon: state.pokemon.pokemonList,
  isDrawer: state.boolean.isDrawer,
  filterTypes: state.pokemon.filterTypes,
  filterInput: state.pokemon.searchInput,
});

const mapDispatchToProps = (dispatch: Function) => ({
  toggleDrawer: () => {
    dispatch(toggleDrawer());
  },
  toggleDetails: () => {
    dispatch(toggleDetails());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
