import { connect } from 'react-redux';
import DropBox from '../../components/Drop/DropBox';

import {
  removeSelectedPokemon,
  removeAllPokemon,
  pokemonDetails,
} from '../../actions/pokemon';
import { toggleDetails } from '../../actions/boolean';
import { Pokemon } from '../../type';

const mapStateToProps = (state: any) => ({
  pokemonSelected: state.pokemon.pokemonSelected,
  pokemonIds: state.pokemon.pokemonSelectedIds,
  state,
});

const mapDispatchToProps = (dispatch: Function) => ({
  clearOnePokemon: (index: number) => {
    dispatch(removeSelectedPokemon(index));
  },
  removeAllPokemon: () => {
    dispatch(removeAllPokemon());
  },
  toggleDetails: () => {
    dispatch(toggleDetails());
  },
  pokemonDetails: (pokestat: Pokemon) => {
    dispatch(pokemonDetails(pokestat));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DropBox);
