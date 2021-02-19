import { connect } from 'react-redux';
import DropBox from '../../components/Drop/DropBox';

import { removeSelectedPokemon } from '../../actions/pokemon';

const mapStateToProps = (state) => ({
  pokemonSelected: state.pokemon.pokemonSelected,
});

const mapDispatchToProps = (dispatch) => ({
  clearOnePokemon: (index) => {
    dispatch(removeSelectedPokemon(index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DropBox);
