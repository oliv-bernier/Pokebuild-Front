import { connect } from 'react-redux';
import Pokestat from '../../components/Pokestat/index.tsx';

import { toggleDetails, toggleSuggestion } from '../../actions/boolean';
import { addSelectedPokemon, addFilterTypes } from '../../actions/pokemon';
import { switchFilter } from '../../actions/types';

const mapStateToProp = (state) => ({
  pokemon: state.pokemon.pokedetails,
  isSuggestion: state.boolean.isSuggestion,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDetails: () => {
    dispatch(toggleDetails());
  },
  addPokemon: (id) => {
    dispatch(addSelectedPokemon(id));
  },
  addFilterTypes: (type) => {
    dispatch(addFilterTypes(type));
  },
  switchFilter: (value, key) => {
    dispatch(switchFilter(value, key));
  },
  toggleSuggestion: () => {
    dispatch(toggleSuggestion());
  },
});

export default connect(mapStateToProp, mapDispatchToProps)(Pokestat);
