import { connect } from 'react-redux';
import Pokestat from '../../components/Pokestat/index.tsx';

import { toggleDetails } from '../../actions/boolean';
import { addSelectedPokemon } from '../../actions/pokemon';

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
});

export default connect(mapStateToProp, mapDispatchToProps)(Pokestat);
