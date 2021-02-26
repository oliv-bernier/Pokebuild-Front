import { connect } from 'react-redux';
import Tab from '../../components/Tab';

const mapStateToProp = (state: any) => ({
  types: state.pokemon.types,
  pokemonSelected: state.pokemon.pokemonSelected,
  teamResistances: state.resistances,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProp, mapDispatchToProps)(Tab);
