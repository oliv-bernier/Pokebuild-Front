import { connect } from 'react-redux';
import Tab from '../../components/Tab';

import { toggleDetails } from '../../actions/boolean';
import { pokemonDetails } from '../../actions/pokemon';
import { Pokemon } from '../../type';

const mapStateToProp = (state: any) => ({
  types: state.pokemon.types,
  pokemonSelected: state.pokemon.pokemonSelected,
  teamResistances: state.resistances,
  isDarkMode: state.boolean.isDarkMode,
  state,
});

const mapDispatchToProps = (dispatch: Function) => ({
  toggleDetails: () => {
    dispatch(toggleDetails());
  },
  pokemonDetails: (pokestat: Pokemon) => {
    dispatch(pokemonDetails(pokestat));
  },
});

export default connect(mapStateToProp, mapDispatchToProps)(Tab);
