import { connect } from 'react-redux';
import Tab from '../../components/Tab/index';

const mapStateToProp = (state) => ({
  types: state.pokemon.types,
  pokemonSelected: state.pokemon.pokemonSelected,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProp, mapDispatchToProps)(Tab);
