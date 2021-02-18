import { connect } from 'react-redux';
import Drop from '../../components/Drop/index.js';

import { removeAllPokemon } from '../../actions/pokemon';

const mapStateToProps = (state) => ({
  pokemonSelected: state.pokemon.pokemonSelected,
});

const mapDispatchToProps = (dispatch) => ({
  clearPokemons: () => {
    dispatch(removeAllPokemon());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Drop);
