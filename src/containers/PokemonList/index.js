import { connect } from 'react-redux';

import PokemonList from '../../components/PokemonList/index.tsx';

import { toggleDetails } from '../../actions/boolean';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  toggleDetails: () => {
    dispatch(toggleDetails());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
