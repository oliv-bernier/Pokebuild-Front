import { connect } from 'react-redux';
import Suggestion from '../../components/Suggestion/index.tsx';

import { toggleSuggestion } from '../../actions/boolean';

const mapStateToProps = (state) => ({
  pokemon: state.pokemon.pokeSuggest,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSuggestion: () => {
    dispatch(toggleSuggestion());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Suggestion);
