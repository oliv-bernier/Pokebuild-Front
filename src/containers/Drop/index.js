import { connect } from 'react-redux';
import Drop from '../../components/Drop/index.tsx';

import { removeAllPokemon, sendTeam } from '../../actions/pokemon';

const mapStateToProps = (state) => ({
  pokemonSelected: state.pokemon.pokemonSelected,
  pokemonIds: state.pokemon.pokemonSelectedIds,
});

const mapDispatchToProps = (dispatch) => ({
  clearPokemons: () => {
    dispatch(removeAllPokemon());
  },
  sendTeam: (team) => {
    dispatch(sendTeam(team));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Drop);
