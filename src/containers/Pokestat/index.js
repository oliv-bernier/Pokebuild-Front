import { connect } from 'react-redux';
import Pokestat from '../../components/Pokestat/index.tsx';

import { toggleDetails } from '../../actions/boolean';
import { addSelectedPokemon, addFilterTypes, sendTeam } from '../../actions/pokemon';
import { switchFilter } from '../../actions/types';

const mapStateToProp = (state) => ({
  pokemon: state.pokemon.pokedetails,
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
});

export default connect(mapStateToProp, mapDispatchToProps)(Pokestat);
