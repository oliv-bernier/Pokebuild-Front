import { connect } from 'react-redux';
import Tab from '../../components/Tab/index.tsx';

const mapStateToProp = (state) => ({
  types: state.pokemon.types,
  pokemonSelected: state.pokemon.pokemonSelected,
  teamResistances: state.resistances,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProp, mapDispatchToProps)(Tab);
