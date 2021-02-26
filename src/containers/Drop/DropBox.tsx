import { connect } from 'react-redux';
import DropBox from '../../components/Drop/DropBox';

import { removeSelectedPokemon, removeAllPokemon } from '../../actions/pokemon';

const mapStateToProps = (state: any) => ({
  pokemonSelected: state.pokemon.pokemonSelected,
  pokemonIds: state.pokemon.pokemonSelectedIds,
});

const mapDispatchToProps = (dispatch: Function) => ({
  clearOnePokemon: (index: number) => {
    dispatch(removeSelectedPokemon(index));
  },
  removeAllPokemon: () => {
    dispatch(removeAllPokemon());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DropBox);
