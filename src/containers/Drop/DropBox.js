import { connect } from 'react-redux';
import DropBox from '../../components/Drop/DropBox';

import { removeSelectedPokemon, sendTeam } from '../../actions/pokemon';

const mapStateToProps = (state) => ({
  pokemonSelected: state.pokemon.pokemonSelected,
  pokemonIds: state.pokemon.pokemonSelectedIds,
});

const mapDispatchToProps = (dispatch) => ({
  clearOnePokemon: (index) => {
    dispatch(removeSelectedPokemon(index));
  },
  sendTeam: (team) => {
    dispatch(sendTeam(team));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DropBox);
