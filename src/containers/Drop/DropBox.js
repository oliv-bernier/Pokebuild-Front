import { connect } from 'react-redux';
import DropBox from '../../components/Drop/DropBox';

import { removeSelectedPokemon, removeAllPokemon } from '../../actions/pokemon';

const mapStateToProps = (state) => ({
  pokemonSelected: state.pokemon.pokemonSelected,
  pokemonIds: state.pokemon.pokemonSelectedIds,
});

const mapDispatchToProps = (dispatch) => ({
  clearOnePokemon: (index) => {
    dispatch(removeSelectedPokemon(index));
  },
  removeAllPokemon: () => {
    dispatch(removeAllPokemon());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DropBox);
