import { connect } from 'react-redux';
import Drawer from '../../components/Drawer';

import { toggleDrawer, toggleDetails, stopRoll } from '../../actions/boolean';

const mapStateToProps = (state: any) => ({
  pokemon: state.pokemon.pokemonList,
  isDrawer: state.boolean.isDrawer,
  isRoll: state.boolean.isRoll,
  isConfirmedRoll: state.boolean.isConfirmedRoll,
  filterTypes: state.pokemon.filterTypes,
  filterInput: state.pokemon.searchInput,
  genValue: state.pokemon.genValue,
});

const mapDispatchToProps = (dispatch: Function) => ({
  toggleDrawer: () => {
    dispatch(toggleDrawer());
  },
  toggleDetails: () => {
    dispatch(toggleDetails());
  },
  stopRoll: () => {
    dispatch(stopRoll());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
