import { connect } from 'react-redux';

import PokemonList from '../../components/PokemonList';

import { toggleDetails } from '../../actions/boolean';
import { pokemonDetails } from '../../actions/pokemon';
import { Pokemon } from '../../type';

const mapStateToProps = (state: any) => ({
  state,
});

const mapDispatchToProps = (dispatch: Function) => ({
  toggleDetails: () => {
    dispatch(toggleDetails());
  },
  pokemonDetails: (pokestat: Pokemon) => {
    dispatch(pokemonDetails(pokestat));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
