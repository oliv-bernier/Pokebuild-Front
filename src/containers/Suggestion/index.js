import { connect } from 'react-redux';
import Suggestion from '../../components/Suggestion/index.tsx';

import { toggleSuggestion } from '../../actions/boolean';

import { addSelectedPokemon } from '../../actions/pokemon';

const mapStateToProps = (state) => ({
  pokemon: state.pokemon.pokeSuggest,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSuggestion: () => {
    dispatch(toggleSuggestion());
  },
  addSelectedPokemon: (id) => {
    dispatch(addSelectedPokemon(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Suggestion);
