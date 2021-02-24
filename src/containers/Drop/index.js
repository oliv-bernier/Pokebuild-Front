import { connect } from 'react-redux';
import Drop from '../../components/Drop/index.tsx';

import { removeAllPokemon, sendTeam } from '../../actions/pokemon';

import { saveTeam, changeNameInput } from '../../actions/favorites';

import { toggleInputFav } from '../../actions/boolean';

const mapStateToProps = (state) => ({
  pokemonSelected: state.pokemon.pokemonSelected,
  pokemonIds: state.pokemon.pokemonSelectedIds,
  isInputFav: state.boolean.isInputFav,
});

const mapDispatchToProps = (dispatch) => ({
  clearPokemons: () => {
    dispatch(removeAllPokemon());
  },
  sendTeam: (team) => {
    dispatch(sendTeam(team));
  },
  saveTeam: () => {
    dispatch(saveTeam());
  },
  toggleInputFav: () => {
    dispatch(toggleInputFav());
  },
  changeInputFav: (value, key) => {
    dispatch(changeNameInput(value, key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Drop);
