import { connect } from 'react-redux';
import Drop from '../../components/Drop/index';

import { removeAllPokemon, sendTeam, generateTeam } from '../../actions/pokemon';

import { saveTeam, changeNameInput } from '../../actions/favorites';

import { toggleInputFav } from '../../actions/boolean';

const mapStateToProps = (state: any) => ({
  pokemonSelected: state.pokemon.pokemonSelected,
  pokemonIds: state.pokemon.pokemonSelectedIds,
  isInputFav: state.boolean.isInputFav,
  isLogged: state.boolean.isLogged,
});

const mapDispatchToProps = (dispatch: Function) => ({
  clearPokemons: () => {
    dispatch(removeAllPokemon());
  },
  sendTeam: (team: Array<number>) => {
    dispatch(sendTeam(team));
  },
  saveTeam: () => {
    dispatch(saveTeam());
  },
  toggleInputFav: () => {
    dispatch(toggleInputFav());
  },
  changeInputFav: (value: string, key: string) => {
    dispatch(changeNameInput(value, key));
  },
  generateTeam: () => {
    dispatch(generateTeam());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Drop);
