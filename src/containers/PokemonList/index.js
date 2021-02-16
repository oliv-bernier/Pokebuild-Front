import { connect } from 'react-redux';

import PokemonList from '../../components/PokemonList/index.tsx';

import { toggleDetails } from '../../actions/boolean';
import { pokemonDetails } from '../../actions/pokemon';

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDetails: () => {
    dispatch(toggleDetails());
  },
  pokemonDetails: (pokestat) => {
    dispatch(pokemonDetails(pokestat));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
